import { Request } from 'express';

// User Types
export interface User {
  id: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserResponse {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: Date;
}

// Team Types
export interface Team {
  id: string;
  name: string;
  owner_id: string;
  organization?: string;
  age_group?: string;
  season?: string;
  created_at: Date;
  updated_at: Date;
}

// Player Types
export interface Player {
  id: string;
  team_id: string;
  first_name: string;
  last_name: string;
  jersey_number?: string;
  primary_position: string;
  bats?: 'R' | 'L' | 'S';
  throws?: 'R' | 'L';
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

// Game Types
export interface Game {
  id: string;
  home_team_id: string;
  away_team_id: string;
  game_date: Date;
  game_time?: string;
  location?: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  home_score: number;
  away_score: number;
  current_inning: number;
  inning_half: 'top' | 'bottom';
  created_by: string;
  created_at: Date;
  updated_at: Date;
}

// Inning Types
export interface Inning {
  id: string;
  game_id: string;
  inning_number: number;
  half: 'top' | 'bottom';
  batting_team_id: string;
  pitching_team_id: string;
  runs_scored: number;
  created_at: Date;
}

// At-Bat Types
export interface AtBat {
  id: string;
  game_id: string;
  inning_id: string;
  batter_id: string;
  pitcher_id: string;
  batting_order?: number;
  balls: number;
  strikes: number;
  outs_before: number;
  outs_after: number;
  result?: string;
  rbi: number;
  runs_scored: number;
  ab_start_time: Date;
  ab_end_time?: Date;
  created_at: Date;
}

// Pitch Types
export interface Pitch {
  id: string;
  at_bat_id: string;
  game_id: string;
  pitcher_id: string;
  batter_id: string;
  pitch_number: number;
  pitch_type: string;
  velocity?: number;
  location_x?: number;
  location_y?: number;
  zone?: string;
  balls_before: number;
  strikes_before: number;
  pitch_result: string;
  created_at: Date;
}

// Play Types
export interface Play {
  id: string;
  pitch_id: string;
  at_bat_id: string;
  contact_type: 'ground_ball' | 'fly_ball' | 'line_drive' | 'pop_up' | 'bunt';
  contact_quality?: 'hard' | 'medium' | 'soft' | 'weak';
  hit_direction?: 'pull_side' | 'center' | 'opposite_field';
  field_location?: string;
  hit_depth?: string;
  hit_result?: string;
  out_type?: string;
  fielded_by_position?: string;
  is_error: boolean;
  is_out: boolean;
  runs_scored: number;
  notes?: string;
  created_at: Date;
}

// Authentication Types
export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface JWTPayload {
  id: string;
  email: string;
}

// Analytics Types
export interface BatterHistory {
  at_bats: AtBat[];
  pitches: Pitch[];
  plays: Play[];
  stats: {
    total_abs: number;
    hits: number;
    strikeouts: number;
    walks: number;
    batting_average: number;
  };
}

export interface PitchLocationData {
  location_x: number;
  location_y: number;
  pitch_type: string;
  pitch_result: string;
  velocity?: number;
}

export interface SprayChartData {
  field_location: string;
  contact_quality: string;
  hit_result?: string;
  count: number;
}