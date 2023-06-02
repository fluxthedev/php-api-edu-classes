<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
  public function showAllUsers(): JsonResponse
  {
    return response()->json(User::all());
  }

  public function showOneUser($id): JsonResponse
  {
    return response()->json(User::find($id));
  }

  public function create(Request $request)
  {
    $user = User::create($request->all());
    return response()->json($user, 201);
  }

  public function update($id, Request $request)
  {
    $user = User::findOrFail($id);
    $user->update($request->all());
    return response()->json($user, 200);
  }

  public function delete($id)
  {
    User::findOrFail($id)->delete();
    return response('Deleted Successfully', 200);
  }
}
