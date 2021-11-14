import { CreateUserDto, DeploymentScalingMethodDto } from '@agoracloud/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateWorkstationPropertiesDto {
  @Min(1)
  @IsInt()
  @ApiProperty({ minimum: 1 })
  readonly cpuCount!: number;

  @Min(2)
  @IsInt()
  @ApiProperty({ minimum: 2 })
  readonly memoryCount!: number;

  @Min(8)
  @IsInt()
  @ApiProperty({ minimum: 8 })
  readonly storageCount!: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(DeploymentScalingMethodDto)
  @ApiProperty({
    enum: DeploymentScalingMethodDto,
    type: DeploymentScalingMethodDto,
  })
  readonly scalingMethod!: DeploymentScalingMethodDto;

  constructor(obj: CreateWorkstationPropertiesDto) {
    Object.assign(this, obj);
  }
}

export class CreateWorkstationDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({ minLength: 1 })
  readonly name!: string;

  @IsDefined()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateUserDto)
  readonly user!: CreateUserDto;

  @IsDefined()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateWorkstationPropertiesDto)
  readonly properties!: CreateWorkstationPropertiesDto;

  constructor(obj: CreateWorkstationDto) {
    Object.assign(this, obj);
  }
}