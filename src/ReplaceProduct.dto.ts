import { IsDefined, IsNumber, IsString, Min } from "class-validator";

export class ReplaceProductDto{
  @IsDefined({
    message: 'A név megadása kötelező!'
  })
  @IsString()
  name: string;

  @IsDefined({
    message: 'Az ár megadása kötelező'
  })
  @IsNumber()
  @Min(1)
  price: number;
}
