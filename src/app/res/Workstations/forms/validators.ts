import { CreateUserDto, DeploymentScalingMethodDto } from '@agoracloud/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class CreateWorkstationPropertiesDto {
  @Min(1)
  @IsInt()
  readonly cpuCount!: number;

  @Min(2)
  @IsInt()
  readonly memoryCount!: number;

  @Min(8)
  @IsInt()
  readonly storageCount!: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(DeploymentScalingMethodDto)
  readonly scalingMethod!: DeploymentScalingMethodDto;

  constructor(obj: CreateWorkstationPropertiesDto) {
    Object.assign(this, obj);
  }
}

export class CreateWorkstationDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly name!: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateUserDto)
  readonly user!: CreateUserDto;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateWorkstationPropertiesDto)
  readonly properties!: CreateWorkstationPropertiesDto;

  constructor(obj: CreateWorkstationDto) {
    Object.assign(this, obj);
  }
}



export class EditWorkstationPropertiesDto {

  @IsDefined()
  @ValidateNested()
  @Type(() => EditWorkstationResourcesDto)
  readonly resources!: EditWorkstationResourcesDto;
}
export class EditWorkstationResourcesDto {
  @Min(1)
  @IsInt()
  readonly cpuCount!: number;

  @Min(2)
  @IsInt()
  readonly memoryCount!: number;

  // @Min(8)
  // @IsInt()
  // @ApiProperty({ minimum: 8 })
  // readonly storageCount!: number;

  constructor(obj: CreateWorkstationPropertiesDto) {
    Object.assign(this, obj);
  }
}


export class EditUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  readonly fullName: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  readonly password: string;
  constructor(obj: EditUserDto) {
    Object.assign(this, obj);
  }
}

export class EditWorkstationDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly name!: string;


  @IsDefined()
  @ValidateNested()
  @Type(() => EditUserDto)
  readonly user!: EditUserDto;

  @IsDefined()
  @ValidateNested()
  @Type(() => EditWorkstationPropertiesDto)
  readonly properties!: EditWorkstationPropertiesDto;

  constructor(obj: CreateWorkstationDto) {
    Object.assign(this, obj);
  }
}