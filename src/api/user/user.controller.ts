import {
  Controller,
  Get,
  Post,
  Header,
  HttpStatus,
  Body,
  Param,
  Query,
  Res,
} from "@nestjs/common";
import { UserDtoCreate } from "./user.dto.create";
import type { Response } from "express";

@Controller("api/v1/users")
export class UserController {
  @Get()
  findAll(
    @Query("per_page") per_page: number,
    @Query("status") status: "enabled" | "disabled",
    @Res() res: Response,
  ) {
    res.status(HttpStatus.OK).json([
      {
        id: "abcd12345",
        email: "eu@gustavomathias.com.br",
        name: "Gustavo Mathias",
        createdAt: "2026-10-13T18:11:44.802Z",
        status: "enabled",
      },
    ]);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      id: id,
      email: "eu@gustavomathias.com.br",
      name: "Gustavo Mathias",
      createdAt: "2026-10-13T18:11:44.802Z",
      status: "enabled",
    });
  }

  @Post()
  @Header("Cache-Control", "no-store")
  create(@Body() body: UserDtoCreate): boolean {
    return true;
  }
}
