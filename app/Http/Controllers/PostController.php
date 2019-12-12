<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Post;

class PostController extends Controller
{
    public function all_post()
    {
    	$Category=Category::with('posts')->get();
    	return $Category;
    }
}
