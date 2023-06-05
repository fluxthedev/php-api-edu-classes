<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resources extends Model
{
  protected $table = 'resources';

  protected $fillable = ['title', 'short_description', 'cost', 'grade_span', 'tags', 'image'];
}
