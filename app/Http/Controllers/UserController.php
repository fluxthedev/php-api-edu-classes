<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function showAllUsers()
  {
    return response()->json(User::all());
  }

  public function showOneUser($id)
  {
    return response()->json(User::find($id));
  }

  // Add methods for creating, updating, and deleting users as needed
}
