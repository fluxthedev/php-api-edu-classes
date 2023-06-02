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
    $resource = Resources::create($request->all());
    return response()->json($resource, 201);
  }

  public function update($id, Request $request)
  {
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
