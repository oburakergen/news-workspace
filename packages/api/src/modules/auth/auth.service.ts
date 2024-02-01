import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "@app/modules/users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  verifyJwt(payload: string): { email: string } {
    const jwt = this.jwtService.verify(payload);
    return { email: jwt.email };
  }
}
