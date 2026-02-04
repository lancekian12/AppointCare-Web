import { Controller, Post, Route, Body, Tags, Response } from "tsoa";
import * as authService from "../services/authServices";
import { SignupInput, LoginInput, AuthResponse } from "../types/auth.types";

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {

  @Post("signup")
  @Response<400, { message: string }>(400, "Bad request")
  @Response<500, { message: string }>(500, "Server error")
  public async signup(@Body() body: SignupInput): Promise<AuthResponse> {
    try {
      const result = await authService.signup(body);
      return result; // result is proper AuthResponse
    } catch (err: unknown) {
      if (err instanceof Error) {
        // Set status code and throw
        this.setStatus(400);
        throw new Error(err.message);
      }
      this.setStatus(500);
      throw new Error("Server error");
    }
  }

  @Post("login")
  @Response<400, { message: string }>(400, "Bad request")
  @Response<500, { message: string }>(500, "Server error")
  public async login(@Body() body: LoginInput): Promise<AuthResponse> {
    try {
      const result = await authService.login(body);
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.setStatus(400);
        throw new Error(err.message);
      }
      this.setStatus(500);
      throw new Error("Server error");
    }
  }
}
