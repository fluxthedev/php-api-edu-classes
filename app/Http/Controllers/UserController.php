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
    $this->validate($request, [
      'first_name' => 'required|max:255',
      'last_name' => 'required|max:255',
      'role' => 'required|in:Teacher,Student,Admin',
    ]);

    $user = User::create($request->all());

    return response()->json($user, 201);
  }

  public function update($id, Request $request)
  {
    $this->validate($request, [
      'first_name' => 'required|max:255',
      'last_name' => 'required|max:255',
      'role' => 'required|in:Teacher,Student,Admin',
    ]);

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
