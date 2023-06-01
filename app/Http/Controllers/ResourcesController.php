<?php

namespace App\Http\Controllers;

use App\Models\Resources;
use Illuminate\Http\Request;

class ResourcesController extends Controller
{
  public function showAllResources()
  {
    return response()->json(Resources::all());
  }

  public function showOneResource($id)
  {
    return response()->json(Resources::find($id));
  }

  // Add methods for creating, updating, and deleting resources as needed
}
