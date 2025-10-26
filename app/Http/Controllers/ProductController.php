<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Requests\StoreProductRequest;

use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        return Inertia::render('products/index', [ 'products' => $products ]);
    }

    public function create() {
        return Inertia::render('products/create', []);
    }

    public function store(StoreProductRequest $request) {
        $data = $request->validated();
        Product::create($data);
        return redirect()->route('products.index')->with('message', 'Product created successfully.');
    }

    public function edit(Product $product) {
        return Inertia::render('products/edit', [ 'product' => $product ]);
    }

    public function delete(Product $product) {
        $product->delete();
        return redirect()->route('products.index')->with('message', 'Product deleted successfully.');
    }
}
