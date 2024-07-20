<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\V1\UserResource as V1UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::all());
        
    }

    public function show(User $user)
    {
        return new V1UserResource($user);
    }

    public function store(StoreUserRequest $request)
    {
        User::create($request->validated());
        return response()->json("User Created");
    }

    public function update(StoreUserRequest $request, User $user): JsonResponse
    {
        $validatedData = $request->validated();
        $user->update($validatedData);

        return response()->json("User Updated");
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json("user Deleted");
    }
}
