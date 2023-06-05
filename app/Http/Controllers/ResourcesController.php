<?php

namespace App\Http\Controllers;

use App\Models\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ResourcesController extends Controller
{
  public function showAllResources(): JsonResponse
  {
    return response()->json(Resources::all());
  }

  public function showOneResource($id): JsonResponse
  {
    return response()->json(Resources::find($id));
  }

  public function create(Request $request)
  {
    $this->validate($request, [
      'title' => 'required|max:255',
      'short_description' => 'required|max:500',
      'cost' => 'required|numeric|min:0.01|max:99.99',
      'grade_span' => 'required',
      'tags' => 'required',
    ]);

    $resource = Resources::create($request->all());

    return response()->json($resource, 201);
  }

  public function update($id, Request $request)
  {
    $this->validate($request, [
      'title' => 'required|max:255',
      'short_description' => 'required|max:500',
      'cost' => 'required|numeric|min:0.01|max:99.99',
      'grade_span' => 'required',
      'tags' => 'required',
    ]);

    $resource = Resources::findOrFail($id);
    $resource->update($request->all());

    return response()->json($resource, 200);
  }

  public function delete($id)
  {
    Resources::findOrFail($id)->delete();
    return response('Deleted Successfully', 200);
  }
}
