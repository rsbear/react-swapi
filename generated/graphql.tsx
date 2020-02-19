import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type _QueryMeta = {
   __typename?: '_QueryMeta',
  count: Scalars['Int'],
};

export type AddToFilmPlanetsPayload = {
   __typename?: 'AddToFilmPlanetsPayload',
  filmsFilm?: Maybe<Film>,
  planetsPlanet?: Maybe<Planet>,
};

export type AddToFilmSpeciesPayload = {
   __typename?: 'AddToFilmSpeciesPayload',
  filmsFilm?: Maybe<Film>,
  speciesSpecies?: Maybe<Species>,
};

export type AddToFilmStarshipsPayload = {
   __typename?: 'AddToFilmStarshipsPayload',
  filmsFilm?: Maybe<Film>,
  starshipsStarship?: Maybe<Starship>,
};

export type AddToFilmVehiclesPayload = {
   __typename?: 'AddToFilmVehiclesPayload',
  filmsFilm?: Maybe<Film>,
  vehiclesVehicle?: Maybe<Vehicle>,
};

export type AddToPeopleFilmPayload = {
   __typename?: 'AddToPeopleFilmPayload',
  charactersPerson?: Maybe<Person>,
  filmsFilm?: Maybe<Film>,
};

export type AddToPeoplePlanetPayload = {
   __typename?: 'AddToPeoplePlanetPayload',
  residentsPerson?: Maybe<Person>,
  homeworldPlanet?: Maybe<Planet>,
};

export type AddToPeopleSpeciesPayload = {
   __typename?: 'AddToPeopleSpeciesPayload',
  peoplePerson?: Maybe<Person>,
  speciesSpecies?: Maybe<Species>,
};

export type AddToPeopleStarshipsPayload = {
   __typename?: 'AddToPeopleStarshipsPayload',
  pilotsPerson?: Maybe<Person>,
  starshipsStarship?: Maybe<Starship>,
};

export type AddToPeopleVehiclesPayload = {
   __typename?: 'AddToPeopleVehiclesPayload',
  pilotsPerson?: Maybe<Person>,
  vehiclesVehicle?: Maybe<Vehicle>,
};

export type Asset = Node & {
   __typename?: 'Asset',
  createdAt: Scalars['DateTime'],
  fileName: Scalars['String'],
  handle: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  mimeType?: Maybe<Scalars['String']>,
  size: Scalars['Float'],
  updatedAt: Scalars['DateTime'],
  url: Scalars['String'],
  width?: Maybe<Scalars['Float']>,
};

export type AssetFilter = {
  AND?: Maybe<Array<AssetFilter>>,
  OR?: Maybe<Array<AssetFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  fileName?: Maybe<Scalars['String']>,
  fileName_not?: Maybe<Scalars['String']>,
  fileName_in?: Maybe<Array<Scalars['String']>>,
  fileName_not_in?: Maybe<Array<Scalars['String']>>,
  fileName_lt?: Maybe<Scalars['String']>,
  fileName_lte?: Maybe<Scalars['String']>,
  fileName_gt?: Maybe<Scalars['String']>,
  fileName_gte?: Maybe<Scalars['String']>,
  fileName_contains?: Maybe<Scalars['String']>,
  fileName_not_contains?: Maybe<Scalars['String']>,
  fileName_starts_with?: Maybe<Scalars['String']>,
  fileName_not_starts_with?: Maybe<Scalars['String']>,
  fileName_ends_with?: Maybe<Scalars['String']>,
  fileName_not_ends_with?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  handle_not?: Maybe<Scalars['String']>,
  handle_in?: Maybe<Array<Scalars['String']>>,
  handle_not_in?: Maybe<Array<Scalars['String']>>,
  handle_lt?: Maybe<Scalars['String']>,
  handle_lte?: Maybe<Scalars['String']>,
  handle_gt?: Maybe<Scalars['String']>,
  handle_gte?: Maybe<Scalars['String']>,
  handle_contains?: Maybe<Scalars['String']>,
  handle_not_contains?: Maybe<Scalars['String']>,
  handle_starts_with?: Maybe<Scalars['String']>,
  handle_not_starts_with?: Maybe<Scalars['String']>,
  handle_ends_with?: Maybe<Scalars['String']>,
  handle_not_ends_with?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  height_not?: Maybe<Scalars['Float']>,
  height_in?: Maybe<Array<Scalars['Float']>>,
  height_not_in?: Maybe<Array<Scalars['Float']>>,
  height_lt?: Maybe<Scalars['Float']>,
  height_lte?: Maybe<Scalars['Float']>,
  height_gt?: Maybe<Scalars['Float']>,
  height_gte?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  mimeType?: Maybe<Scalars['String']>,
  mimeType_not?: Maybe<Scalars['String']>,
  mimeType_in?: Maybe<Array<Scalars['String']>>,
  mimeType_not_in?: Maybe<Array<Scalars['String']>>,
  mimeType_lt?: Maybe<Scalars['String']>,
  mimeType_lte?: Maybe<Scalars['String']>,
  mimeType_gt?: Maybe<Scalars['String']>,
  mimeType_gte?: Maybe<Scalars['String']>,
  mimeType_contains?: Maybe<Scalars['String']>,
  mimeType_not_contains?: Maybe<Scalars['String']>,
  mimeType_starts_with?: Maybe<Scalars['String']>,
  mimeType_not_starts_with?: Maybe<Scalars['String']>,
  mimeType_ends_with?: Maybe<Scalars['String']>,
  mimeType_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  size_not?: Maybe<Scalars['Float']>,
  size_in?: Maybe<Array<Scalars['Float']>>,
  size_not_in?: Maybe<Array<Scalars['Float']>>,
  size_lt?: Maybe<Scalars['Float']>,
  size_lte?: Maybe<Scalars['Float']>,
  size_gt?: Maybe<Scalars['Float']>,
  size_gte?: Maybe<Scalars['Float']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Float']>,
  width_not?: Maybe<Scalars['Float']>,
  width_in?: Maybe<Array<Scalars['Float']>>,
  width_not_in?: Maybe<Array<Scalars['Float']>>,
  width_lt?: Maybe<Scalars['Float']>,
  width_lte?: Maybe<Scalars['Float']>,
  width_gt?: Maybe<Scalars['Float']>,
  width_gte?: Maybe<Scalars['Float']>,
};

export enum AssetOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type AssetPreviousValues = {
   __typename?: 'AssetPreviousValues',
  createdAt: Scalars['DateTime'],
  fileName: Scalars['String'],
  handle: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  mimeType?: Maybe<Scalars['String']>,
  size: Scalars['Float'],
  updatedAt: Scalars['DateTime'],
  url: Scalars['String'],
  width?: Maybe<Scalars['Float']>,
};

export type AssetSubscriptionFilter = {
  AND?: Maybe<Array<AssetSubscriptionFilter>>,
  OR?: Maybe<Array<AssetSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AssetSubscriptionFilterNode>,
};

export type AssetSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  fileName?: Maybe<Scalars['String']>,
  fileName_not?: Maybe<Scalars['String']>,
  fileName_in?: Maybe<Array<Scalars['String']>>,
  fileName_not_in?: Maybe<Array<Scalars['String']>>,
  fileName_lt?: Maybe<Scalars['String']>,
  fileName_lte?: Maybe<Scalars['String']>,
  fileName_gt?: Maybe<Scalars['String']>,
  fileName_gte?: Maybe<Scalars['String']>,
  fileName_contains?: Maybe<Scalars['String']>,
  fileName_not_contains?: Maybe<Scalars['String']>,
  fileName_starts_with?: Maybe<Scalars['String']>,
  fileName_not_starts_with?: Maybe<Scalars['String']>,
  fileName_ends_with?: Maybe<Scalars['String']>,
  fileName_not_ends_with?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  handle_not?: Maybe<Scalars['String']>,
  handle_in?: Maybe<Array<Scalars['String']>>,
  handle_not_in?: Maybe<Array<Scalars['String']>>,
  handle_lt?: Maybe<Scalars['String']>,
  handle_lte?: Maybe<Scalars['String']>,
  handle_gt?: Maybe<Scalars['String']>,
  handle_gte?: Maybe<Scalars['String']>,
  handle_contains?: Maybe<Scalars['String']>,
  handle_not_contains?: Maybe<Scalars['String']>,
  handle_starts_with?: Maybe<Scalars['String']>,
  handle_not_starts_with?: Maybe<Scalars['String']>,
  handle_ends_with?: Maybe<Scalars['String']>,
  handle_not_ends_with?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  height_not?: Maybe<Scalars['Float']>,
  height_in?: Maybe<Array<Scalars['Float']>>,
  height_not_in?: Maybe<Array<Scalars['Float']>>,
  height_lt?: Maybe<Scalars['Float']>,
  height_lte?: Maybe<Scalars['Float']>,
  height_gt?: Maybe<Scalars['Float']>,
  height_gte?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  mimeType?: Maybe<Scalars['String']>,
  mimeType_not?: Maybe<Scalars['String']>,
  mimeType_in?: Maybe<Array<Scalars['String']>>,
  mimeType_not_in?: Maybe<Array<Scalars['String']>>,
  mimeType_lt?: Maybe<Scalars['String']>,
  mimeType_lte?: Maybe<Scalars['String']>,
  mimeType_gt?: Maybe<Scalars['String']>,
  mimeType_gte?: Maybe<Scalars['String']>,
  mimeType_contains?: Maybe<Scalars['String']>,
  mimeType_not_contains?: Maybe<Scalars['String']>,
  mimeType_starts_with?: Maybe<Scalars['String']>,
  mimeType_not_starts_with?: Maybe<Scalars['String']>,
  mimeType_ends_with?: Maybe<Scalars['String']>,
  mimeType_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  size_not?: Maybe<Scalars['Float']>,
  size_in?: Maybe<Array<Scalars['Float']>>,
  size_not_in?: Maybe<Array<Scalars['Float']>>,
  size_lt?: Maybe<Scalars['Float']>,
  size_lte?: Maybe<Scalars['Float']>,
  size_gt?: Maybe<Scalars['Float']>,
  size_gte?: Maybe<Scalars['Float']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Float']>,
  width_not?: Maybe<Scalars['Float']>,
  width_in?: Maybe<Array<Scalars['Float']>>,
  width_not_in?: Maybe<Array<Scalars['Float']>>,
  width_lt?: Maybe<Scalars['Float']>,
  width_lte?: Maybe<Scalars['Float']>,
  width_gt?: Maybe<Scalars['Float']>,
  width_gte?: Maybe<Scalars['Float']>,
};

export type AssetSubscriptionPayload = {
   __typename?: 'AssetSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Asset>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<AssetPreviousValues>,
};

export type CreateAsset = {
  fileName: Scalars['String'],
  handle: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  size: Scalars['Float'],
  url: Scalars['String'],
  width?: Maybe<Scalars['Float']>,
};

export type CreateFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type CreatePerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type CreatePlanet = {
  climate?: Maybe<Array<Scalars['String']>>,
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  name: Scalars['String'],
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PlanetfilmsFilm>>,
  residentsIds?: Maybe<Array<Scalars['ID']>>,
  residents?: Maybe<Array<PlanetresidentsPerson>>,
};

export type CreateSpecies = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  isPublished?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<SpeciesfilmsFilm>>,
  peopleIds?: Maybe<Array<Scalars['ID']>>,
  people?: Maybe<Array<SpeciespeoplePerson>>,
};

export type CreateStarship = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<StarshipfilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<StarshippilotsPerson>>,
};

export type CreateVehicle = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  crew?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<VehiclefilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<VehiclepilotsPerson>>,
};


export type Film = Node & {
   __typename?: 'Film',
  characters?: Maybe<Array<Person>>,
  createdAt: Scalars['DateTime'],
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  openingCrawl?: Maybe<Scalars['String']>,
  planets?: Maybe<Array<Planet>>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  species?: Maybe<Array<Species>>,
  starships?: Maybe<Array<Starship>>,
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
  vehicles?: Maybe<Array<Vehicle>>,
  _charactersMeta: _QueryMeta,
  _planetsMeta: _QueryMeta,
  _speciesMeta: _QueryMeta,
  _starshipsMeta: _QueryMeta,
  _vehiclesMeta: _QueryMeta,
};


export type FilmCharactersArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmPlanetsArgs = {
  filter?: Maybe<PlanetFilter>,
  orderBy?: Maybe<PlanetOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmSpeciesArgs = {
  filter?: Maybe<SpeciesFilter>,
  orderBy?: Maybe<SpeciesOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmStarshipsArgs = {
  filter?: Maybe<StarshipFilter>,
  orderBy?: Maybe<StarshipOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type FilmVehiclesArgs = {
  filter?: Maybe<VehicleFilter>,
  orderBy?: Maybe<VehicleOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Film_CharactersMetaArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Film_PlanetsMetaArgs = {
  filter?: Maybe<PlanetFilter>,
  orderBy?: Maybe<PlanetOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Film_SpeciesMetaArgs = {
  filter?: Maybe<SpeciesFilter>,
  orderBy?: Maybe<SpeciesOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Film_StarshipsMetaArgs = {
  filter?: Maybe<StarshipFilter>,
  orderBy?: Maybe<StarshipOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Film_VehiclesMetaArgs = {
  filter?: Maybe<VehicleFilter>,
  orderBy?: Maybe<VehicleOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type FilmcharactersPerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type FilmFilter = {
  AND?: Maybe<Array<FilmFilter>>,
  OR?: Maybe<Array<FilmFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  director?: Maybe<Scalars['String']>,
  director_not?: Maybe<Scalars['String']>,
  director_in?: Maybe<Array<Scalars['String']>>,
  director_not_in?: Maybe<Array<Scalars['String']>>,
  director_lt?: Maybe<Scalars['String']>,
  director_lte?: Maybe<Scalars['String']>,
  director_gt?: Maybe<Scalars['String']>,
  director_gte?: Maybe<Scalars['String']>,
  director_contains?: Maybe<Scalars['String']>,
  director_not_contains?: Maybe<Scalars['String']>,
  director_starts_with?: Maybe<Scalars['String']>,
  director_not_starts_with?: Maybe<Scalars['String']>,
  director_ends_with?: Maybe<Scalars['String']>,
  director_not_ends_with?: Maybe<Scalars['String']>,
  episodeId?: Maybe<Scalars['Int']>,
  episodeId_not?: Maybe<Scalars['Int']>,
  episodeId_in?: Maybe<Array<Scalars['Int']>>,
  episodeId_not_in?: Maybe<Array<Scalars['Int']>>,
  episodeId_lt?: Maybe<Scalars['Int']>,
  episodeId_lte?: Maybe<Scalars['Int']>,
  episodeId_gt?: Maybe<Scalars['Int']>,
  episodeId_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  openingCrawl_not?: Maybe<Scalars['String']>,
  openingCrawl_in?: Maybe<Array<Scalars['String']>>,
  openingCrawl_not_in?: Maybe<Array<Scalars['String']>>,
  openingCrawl_lt?: Maybe<Scalars['String']>,
  openingCrawl_lte?: Maybe<Scalars['String']>,
  openingCrawl_gt?: Maybe<Scalars['String']>,
  openingCrawl_gte?: Maybe<Scalars['String']>,
  openingCrawl_contains?: Maybe<Scalars['String']>,
  openingCrawl_not_contains?: Maybe<Scalars['String']>,
  openingCrawl_starts_with?: Maybe<Scalars['String']>,
  openingCrawl_not_starts_with?: Maybe<Scalars['String']>,
  openingCrawl_ends_with?: Maybe<Scalars['String']>,
  openingCrawl_not_ends_with?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  releaseDate_not?: Maybe<Scalars['DateTime']>,
  releaseDate_in?: Maybe<Array<Scalars['DateTime']>>,
  releaseDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  releaseDate_lt?: Maybe<Scalars['DateTime']>,
  releaseDate_lte?: Maybe<Scalars['DateTime']>,
  releaseDate_gt?: Maybe<Scalars['DateTime']>,
  releaseDate_gte?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  characters_every?: Maybe<PersonFilter>,
  characters_some?: Maybe<PersonFilter>,
  characters_none?: Maybe<PersonFilter>,
  planets_every?: Maybe<PlanetFilter>,
  planets_some?: Maybe<PlanetFilter>,
  planets_none?: Maybe<PlanetFilter>,
  species_every?: Maybe<SpeciesFilter>,
  species_some?: Maybe<SpeciesFilter>,
  species_none?: Maybe<SpeciesFilter>,
  starships_every?: Maybe<StarshipFilter>,
  starships_some?: Maybe<StarshipFilter>,
  starships_none?: Maybe<StarshipFilter>,
  vehicles_every?: Maybe<VehicleFilter>,
  vehicles_some?: Maybe<VehicleFilter>,
  vehicles_none?: Maybe<VehicleFilter>,
};

export enum FilmOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DirectorAsc = 'director_ASC',
  DirectorDesc = 'director_DESC',
  EpisodeIdAsc = 'episodeId_ASC',
  EpisodeIdDesc = 'episodeId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  OpeningCrawlAsc = 'openingCrawl_ASC',
  OpeningCrawlDesc = 'openingCrawl_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FilmplanetsPlanet = {
  climate?: Maybe<Array<Scalars['String']>>,
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  name: Scalars['String'],
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PlanetfilmsFilm>>,
  residentsIds?: Maybe<Array<Scalars['ID']>>,
  residents?: Maybe<Array<PlanetresidentsPerson>>,
};

export type FilmPreviousValues = {
   __typename?: 'FilmPreviousValues',
  createdAt: Scalars['DateTime'],
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  updatedAt: Scalars['DateTime'],
};

export type FilmspeciesSpecies = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  isPublished?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<SpeciesfilmsFilm>>,
  peopleIds?: Maybe<Array<Scalars['ID']>>,
  people?: Maybe<Array<SpeciespeoplePerson>>,
};

export type FilmstarshipsStarship = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<StarshipfilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<StarshippilotsPerson>>,
};

export type FilmSubscriptionFilter = {
  AND?: Maybe<Array<FilmSubscriptionFilter>>,
  OR?: Maybe<Array<FilmSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FilmSubscriptionFilterNode>,
};

export type FilmSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  director?: Maybe<Scalars['String']>,
  director_not?: Maybe<Scalars['String']>,
  director_in?: Maybe<Array<Scalars['String']>>,
  director_not_in?: Maybe<Array<Scalars['String']>>,
  director_lt?: Maybe<Scalars['String']>,
  director_lte?: Maybe<Scalars['String']>,
  director_gt?: Maybe<Scalars['String']>,
  director_gte?: Maybe<Scalars['String']>,
  director_contains?: Maybe<Scalars['String']>,
  director_not_contains?: Maybe<Scalars['String']>,
  director_starts_with?: Maybe<Scalars['String']>,
  director_not_starts_with?: Maybe<Scalars['String']>,
  director_ends_with?: Maybe<Scalars['String']>,
  director_not_ends_with?: Maybe<Scalars['String']>,
  episodeId?: Maybe<Scalars['Int']>,
  episodeId_not?: Maybe<Scalars['Int']>,
  episodeId_in?: Maybe<Array<Scalars['Int']>>,
  episodeId_not_in?: Maybe<Array<Scalars['Int']>>,
  episodeId_lt?: Maybe<Scalars['Int']>,
  episodeId_lte?: Maybe<Scalars['Int']>,
  episodeId_gt?: Maybe<Scalars['Int']>,
  episodeId_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  openingCrawl_not?: Maybe<Scalars['String']>,
  openingCrawl_in?: Maybe<Array<Scalars['String']>>,
  openingCrawl_not_in?: Maybe<Array<Scalars['String']>>,
  openingCrawl_lt?: Maybe<Scalars['String']>,
  openingCrawl_lte?: Maybe<Scalars['String']>,
  openingCrawl_gt?: Maybe<Scalars['String']>,
  openingCrawl_gte?: Maybe<Scalars['String']>,
  openingCrawl_contains?: Maybe<Scalars['String']>,
  openingCrawl_not_contains?: Maybe<Scalars['String']>,
  openingCrawl_starts_with?: Maybe<Scalars['String']>,
  openingCrawl_not_starts_with?: Maybe<Scalars['String']>,
  openingCrawl_ends_with?: Maybe<Scalars['String']>,
  openingCrawl_not_ends_with?: Maybe<Scalars['String']>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  releaseDate_not?: Maybe<Scalars['DateTime']>,
  releaseDate_in?: Maybe<Array<Scalars['DateTime']>>,
  releaseDate_not_in?: Maybe<Array<Scalars['DateTime']>>,
  releaseDate_lt?: Maybe<Scalars['DateTime']>,
  releaseDate_lte?: Maybe<Scalars['DateTime']>,
  releaseDate_gt?: Maybe<Scalars['DateTime']>,
  releaseDate_gte?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  characters_every?: Maybe<PersonFilter>,
  characters_some?: Maybe<PersonFilter>,
  characters_none?: Maybe<PersonFilter>,
  planets_every?: Maybe<PlanetFilter>,
  planets_some?: Maybe<PlanetFilter>,
  planets_none?: Maybe<PlanetFilter>,
  species_every?: Maybe<SpeciesFilter>,
  species_some?: Maybe<SpeciesFilter>,
  species_none?: Maybe<SpeciesFilter>,
  starships_every?: Maybe<StarshipFilter>,
  starships_some?: Maybe<StarshipFilter>,
  starships_none?: Maybe<StarshipFilter>,
  vehicles_every?: Maybe<VehicleFilter>,
  vehicles_some?: Maybe<VehicleFilter>,
  vehicles_none?: Maybe<VehicleFilter>,
};

export type FilmSubscriptionPayload = {
   __typename?: 'FilmSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Film>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FilmPreviousValues>,
};

export type FilmvehiclesVehicle = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  crew?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<VehiclefilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<VehiclepilotsPerson>>,
};

export type InvokeFunctionInput = {
  name: Scalars['String'],
  input: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type InvokeFunctionPayload = {
   __typename?: 'InvokeFunctionPayload',
  result: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createAsset?: Maybe<Asset>,
  createFilm?: Maybe<Film>,
  createPerson?: Maybe<Person>,
  createPlanet?: Maybe<Planet>,
  createSpecies?: Maybe<Species>,
  createStarship?: Maybe<Starship>,
  createVehicle?: Maybe<Vehicle>,
  updateAsset?: Maybe<Asset>,
  updateFilm?: Maybe<Film>,
  updatePerson?: Maybe<Person>,
  updatePlanet?: Maybe<Planet>,
  updateSpecies?: Maybe<Species>,
  updateStarship?: Maybe<Starship>,
  updateVehicle?: Maybe<Vehicle>,
  updateOrCreateAsset?: Maybe<Asset>,
  updateOrCreateFilm?: Maybe<Film>,
  updateOrCreatePerson?: Maybe<Person>,
  updateOrCreatePlanet?: Maybe<Planet>,
  updateOrCreateSpecies?: Maybe<Species>,
  updateOrCreateStarship?: Maybe<Starship>,
  updateOrCreateVehicle?: Maybe<Vehicle>,
  deleteAsset?: Maybe<Asset>,
  deleteFilm?: Maybe<Film>,
  deletePerson?: Maybe<Person>,
  deletePlanet?: Maybe<Planet>,
  deleteSpecies?: Maybe<Species>,
  deleteStarship?: Maybe<Starship>,
  deleteVehicle?: Maybe<Vehicle>,
  addToFilmPlanets?: Maybe<AddToFilmPlanetsPayload>,
  addToFilmSpecies?: Maybe<AddToFilmSpeciesPayload>,
  addToFilmStarships?: Maybe<AddToFilmStarshipsPayload>,
  addToFilmVehicles?: Maybe<AddToFilmVehiclesPayload>,
  addToPeopleFilm?: Maybe<AddToPeopleFilmPayload>,
  addToPeoplePlanet?: Maybe<AddToPeoplePlanetPayload>,
  addToPeopleSpecies?: Maybe<AddToPeopleSpeciesPayload>,
  addToPeopleStarships?: Maybe<AddToPeopleStarshipsPayload>,
  addToPeopleVehicles?: Maybe<AddToPeopleVehiclesPayload>,
  removeFromFilmPlanets?: Maybe<RemoveFromFilmPlanetsPayload>,
  removeFromFilmSpecies?: Maybe<RemoveFromFilmSpeciesPayload>,
  removeFromFilmStarships?: Maybe<RemoveFromFilmStarshipsPayload>,
  removeFromFilmVehicles?: Maybe<RemoveFromFilmVehiclesPayload>,
  removeFromPeopleFilm?: Maybe<RemoveFromPeopleFilmPayload>,
  removeFromPeoplePlanet?: Maybe<RemoveFromPeoplePlanetPayload>,
  removeFromPeopleSpecies?: Maybe<RemoveFromPeopleSpeciesPayload>,
  removeFromPeopleStarships?: Maybe<RemoveFromPeopleStarshipsPayload>,
  removeFromPeopleVehicles?: Maybe<RemoveFromPeopleVehiclesPayload>,
  invokeFunction?: Maybe<InvokeFunctionPayload>,
};


export type MutationCreateAssetArgs = {
  fileName: Scalars['String'],
  handle: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  size: Scalars['Float'],
  url: Scalars['String'],
  width?: Maybe<Scalars['Float']>
};


export type MutationCreateFilmArgs = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
};


export type MutationCreatePersonArgs = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
};


export type MutationCreatePlanetArgs = {
  climate?: Maybe<Array<Scalars['String']>>,
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  name: Scalars['String'],
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PlanetfilmsFilm>>,
  residentsIds?: Maybe<Array<Scalars['ID']>>,
  residents?: Maybe<Array<PlanetresidentsPerson>>
};


export type MutationCreateSpeciesArgs = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  isPublished?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<SpeciesfilmsFilm>>,
  peopleIds?: Maybe<Array<Scalars['ID']>>,
  people?: Maybe<Array<SpeciespeoplePerson>>
};


export type MutationCreateStarshipArgs = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<StarshipfilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<StarshippilotsPerson>>
};


export type MutationCreateVehicleArgs = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  crew?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<VehiclefilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<VehiclepilotsPerson>>
};


export type MutationUpdateAssetArgs = {
  fileName?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  url?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Float']>
};


export type MutationUpdateFilmArgs = {
  director?: Maybe<Scalars['String']>,
  episodeId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>
};


export type MutationUpdatePersonArgs = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>
};


export type MutationUpdatePlanetArgs = {
  climate?: Maybe<Array<Scalars['String']>>,
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PlanetfilmsFilm>>,
  residentsIds?: Maybe<Array<Scalars['ID']>>,
  residents?: Maybe<Array<PlanetresidentsPerson>>
};


export type MutationUpdateSpeciesArgs = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<SpeciesfilmsFilm>>,
  peopleIds?: Maybe<Array<Scalars['ID']>>,
  people?: Maybe<Array<SpeciespeoplePerson>>
};


export type MutationUpdateStarshipArgs = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<StarshipfilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<StarshippilotsPerson>>
};


export type MutationUpdateVehicleArgs = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  crew?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<VehiclefilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<VehiclepilotsPerson>>
};


export type MutationUpdateOrCreateAssetArgs = {
  update: UpdateAsset,
  create: CreateAsset
};


export type MutationUpdateOrCreateFilmArgs = {
  update: UpdateFilm,
  create: CreateFilm
};


export type MutationUpdateOrCreatePersonArgs = {
  update: UpdatePerson,
  create: CreatePerson
};


export type MutationUpdateOrCreatePlanetArgs = {
  update: UpdatePlanet,
  create: CreatePlanet
};


export type MutationUpdateOrCreateSpeciesArgs = {
  update: UpdateSpecies,
  create: CreateSpecies
};


export type MutationUpdateOrCreateStarshipArgs = {
  update: UpdateStarship,
  create: CreateStarship
};


export type MutationUpdateOrCreateVehicleArgs = {
  update: UpdateVehicle,
  create: CreateVehicle
};


export type MutationDeleteAssetArgs = {
  id: Scalars['ID']
};


export type MutationDeleteFilmArgs = {
  id: Scalars['ID']
};


export type MutationDeletePersonArgs = {
  id: Scalars['ID']
};


export type MutationDeletePlanetArgs = {
  id: Scalars['ID']
};


export type MutationDeleteSpeciesArgs = {
  id: Scalars['ID']
};


export type MutationDeleteStarshipArgs = {
  id: Scalars['ID']
};


export type MutationDeleteVehicleArgs = {
  id: Scalars['ID']
};


export type MutationAddToFilmPlanetsArgs = {
  planetsPlanetId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationAddToFilmSpeciesArgs = {
  speciesSpeciesId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationAddToFilmStarshipsArgs = {
  starshipsStarshipId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationAddToFilmVehiclesArgs = {
  vehiclesVehicleId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationAddToPeopleFilmArgs = {
  filmsFilmId: Scalars['ID'],
  charactersPersonId: Scalars['ID']
};


export type MutationAddToPeoplePlanetArgs = {
  homeworldPlanetId: Scalars['ID'],
  residentsPersonId: Scalars['ID']
};


export type MutationAddToPeopleSpeciesArgs = {
  speciesSpeciesId: Scalars['ID'],
  peoplePersonId: Scalars['ID']
};


export type MutationAddToPeopleStarshipsArgs = {
  starshipsStarshipId: Scalars['ID'],
  pilotsPersonId: Scalars['ID']
};


export type MutationAddToPeopleVehiclesArgs = {
  vehiclesVehicleId: Scalars['ID'],
  pilotsPersonId: Scalars['ID']
};


export type MutationRemoveFromFilmPlanetsArgs = {
  planetsPlanetId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationRemoveFromFilmSpeciesArgs = {
  speciesSpeciesId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationRemoveFromFilmStarshipsArgs = {
  starshipsStarshipId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationRemoveFromFilmVehiclesArgs = {
  vehiclesVehicleId: Scalars['ID'],
  filmsFilmId: Scalars['ID']
};


export type MutationRemoveFromPeopleFilmArgs = {
  filmsFilmId: Scalars['ID'],
  charactersPersonId: Scalars['ID']
};


export type MutationRemoveFromPeoplePlanetArgs = {
  homeworldPlanetId: Scalars['ID'],
  residentsPersonId: Scalars['ID']
};


export type MutationRemoveFromPeopleSpeciesArgs = {
  speciesSpeciesId: Scalars['ID'],
  peoplePersonId: Scalars['ID']
};


export type MutationRemoveFromPeopleStarshipsArgs = {
  starshipsStarshipId: Scalars['ID'],
  pilotsPersonId: Scalars['ID']
};


export type MutationRemoveFromPeopleVehiclesArgs = {
  vehiclesVehicleId: Scalars['ID'],
  pilotsPersonId: Scalars['ID']
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Person = Node & {
   __typename?: 'Person',
  birthYear?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  films?: Maybe<Array<Film>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  homeworld?: Maybe<Planet>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  species?: Maybe<Array<Species>>,
  starships?: Maybe<Array<Starship>>,
  updatedAt: Scalars['DateTime'],
  vehicles?: Maybe<Array<Vehicle>>,
  _filmsMeta: _QueryMeta,
  _speciesMeta: _QueryMeta,
  _starshipsMeta: _QueryMeta,
  _vehiclesMeta: _QueryMeta,
};


export type PersonFilmsArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonHomeworldArgs = {
  filter?: Maybe<PlanetFilter>
};


export type PersonSpeciesArgs = {
  filter?: Maybe<SpeciesFilter>,
  orderBy?: Maybe<SpeciesOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonStarshipsArgs = {
  filter?: Maybe<StarshipFilter>,
  orderBy?: Maybe<StarshipOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PersonVehiclesArgs = {
  filter?: Maybe<VehicleFilter>,
  orderBy?: Maybe<VehicleOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Person_FilmsMetaArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Person_SpeciesMetaArgs = {
  filter?: Maybe<SpeciesFilter>,
  orderBy?: Maybe<SpeciesOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Person_StarshipsMetaArgs = {
  filter?: Maybe<StarshipFilter>,
  orderBy?: Maybe<StarshipOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Person_VehiclesMetaArgs = {
  filter?: Maybe<VehicleFilter>,
  orderBy?: Maybe<VehicleOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum Person_Eye_Color {
  Unknown = 'UNKNOWN',
  Blue = 'BLUE',
  Yellow = 'YELLOW',
  Red = 'RED',
  Brown = 'BROWN',
  Bluegrey = 'BLUEGREY',
  Black = 'BLACK',
  Orange = 'ORANGE',
  Hazel = 'HAZEL',
  Pink = 'PINK',
  Gold = 'GOLD',
  Green = 'GREEN',
  White = 'WHITE',
  Dark = 'DARK'
}

export enum Person_Gender {
  Unknown = 'UNKNOWN',
  Male = 'MALE',
  Female = 'FEMALE',
  Hermaphrodite = 'HERMAPHRODITE'
}

export enum Person_Hair_Color {
  Auburn = 'AUBURN',
  Black = 'BLACK',
  Blonde = 'BLONDE',
  Brown = 'BROWN',
  Grey = 'GREY',
  Unknown = 'UNKNOWN',
  White = 'WHITE'
}

export enum Person_Skin_Color {
  Unknown = 'UNKNOWN',
  Fair = 'FAIR',
  Gold = 'GOLD',
  White = 'WHITE',
  Light = 'LIGHT',
  Green = 'GREEN',
  Greentan = 'GREENTAN',
  Pale = 'PALE',
  Metal = 'METAL',
  Dark = 'DARK',
  Brownmottle = 'BROWNMOTTLE',
  Brown = 'BROWN',
  Grey = 'GREY',
  Mottledgreen = 'MOTTLEDGREEN',
  Orange = 'ORANGE',
  Blue = 'BLUE',
  Red = 'RED',
  Yellow = 'YELLOW',
  Tan = 'TAN',
  Silver = 'SILVER'
}

export type PersonfilmsFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type PersonFilter = {
  AND?: Maybe<Array<PersonFilter>>,
  OR?: Maybe<Array<PersonFilter>>,
  birthYear?: Maybe<Scalars['String']>,
  birthYear_not?: Maybe<Scalars['String']>,
  birthYear_in?: Maybe<Array<Scalars['String']>>,
  birthYear_not_in?: Maybe<Array<Scalars['String']>>,
  birthYear_lt?: Maybe<Scalars['String']>,
  birthYear_lte?: Maybe<Scalars['String']>,
  birthYear_gt?: Maybe<Scalars['String']>,
  birthYear_gte?: Maybe<Scalars['String']>,
  birthYear_contains?: Maybe<Scalars['String']>,
  birthYear_not_contains?: Maybe<Scalars['String']>,
  birthYear_starts_with?: Maybe<Scalars['String']>,
  birthYear_not_starts_with?: Maybe<Scalars['String']>,
  birthYear_ends_with?: Maybe<Scalars['String']>,
  birthYear_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  gender?: Maybe<Person_Gender>,
  gender_not?: Maybe<Person_Gender>,
  gender_in?: Maybe<Array<Person_Gender>>,
  gender_not_in?: Maybe<Array<Person_Gender>>,
  height?: Maybe<Scalars['Int']>,
  height_not?: Maybe<Scalars['Int']>,
  height_in?: Maybe<Array<Scalars['Int']>>,
  height_not_in?: Maybe<Array<Scalars['Int']>>,
  height_lt?: Maybe<Scalars['Int']>,
  height_lte?: Maybe<Scalars['Int']>,
  height_gt?: Maybe<Scalars['Int']>,
  height_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  mass_not?: Maybe<Scalars['Float']>,
  mass_in?: Maybe<Array<Scalars['Float']>>,
  mass_not_in?: Maybe<Array<Scalars['Float']>>,
  mass_lt?: Maybe<Scalars['Float']>,
  mass_lte?: Maybe<Scalars['Float']>,
  mass_gt?: Maybe<Scalars['Float']>,
  mass_gte?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  homeworld?: Maybe<PlanetFilter>,
  species_every?: Maybe<SpeciesFilter>,
  species_some?: Maybe<SpeciesFilter>,
  species_none?: Maybe<SpeciesFilter>,
  starships_every?: Maybe<StarshipFilter>,
  starships_some?: Maybe<StarshipFilter>,
  starships_none?: Maybe<StarshipFilter>,
  vehicles_every?: Maybe<VehicleFilter>,
  vehicles_some?: Maybe<VehicleFilter>,
  vehicles_none?: Maybe<VehicleFilter>,
};

export type PersonhomeworldPlanet = {
  climate?: Maybe<Array<Scalars['String']>>,
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  name: Scalars['String'],
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PlanetfilmsFilm>>,
  residentsIds?: Maybe<Array<Scalars['ID']>>,
  residents?: Maybe<Array<PlanetresidentsPerson>>,
};

export enum PersonOrderBy {
  BirthYearAsc = 'birthYear_ASC',
  BirthYearDesc = 'birthYear_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  MassAsc = 'mass_ASC',
  MassDesc = 'mass_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonPreviousValues = {
   __typename?: 'PersonPreviousValues',
  birthYear?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  updatedAt: Scalars['DateTime'],
};

export type PersonspeciesSpecies = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  isPublished?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<SpeciesfilmsFilm>>,
  peopleIds?: Maybe<Array<Scalars['ID']>>,
  people?: Maybe<Array<SpeciespeoplePerson>>,
};

export type PersonstarshipsStarship = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<StarshipfilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<StarshippilotsPerson>>,
};

export type PersonSubscriptionFilter = {
  AND?: Maybe<Array<PersonSubscriptionFilter>>,
  OR?: Maybe<Array<PersonSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PersonSubscriptionFilterNode>,
};

export type PersonSubscriptionFilterNode = {
  birthYear?: Maybe<Scalars['String']>,
  birthYear_not?: Maybe<Scalars['String']>,
  birthYear_in?: Maybe<Array<Scalars['String']>>,
  birthYear_not_in?: Maybe<Array<Scalars['String']>>,
  birthYear_lt?: Maybe<Scalars['String']>,
  birthYear_lte?: Maybe<Scalars['String']>,
  birthYear_gt?: Maybe<Scalars['String']>,
  birthYear_gte?: Maybe<Scalars['String']>,
  birthYear_contains?: Maybe<Scalars['String']>,
  birthYear_not_contains?: Maybe<Scalars['String']>,
  birthYear_starts_with?: Maybe<Scalars['String']>,
  birthYear_not_starts_with?: Maybe<Scalars['String']>,
  birthYear_ends_with?: Maybe<Scalars['String']>,
  birthYear_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  gender?: Maybe<Person_Gender>,
  gender_not?: Maybe<Person_Gender>,
  gender_in?: Maybe<Array<Person_Gender>>,
  gender_not_in?: Maybe<Array<Person_Gender>>,
  height?: Maybe<Scalars['Int']>,
  height_not?: Maybe<Scalars['Int']>,
  height_in?: Maybe<Array<Scalars['Int']>>,
  height_not_in?: Maybe<Array<Scalars['Int']>>,
  height_lt?: Maybe<Scalars['Int']>,
  height_lte?: Maybe<Scalars['Int']>,
  height_gt?: Maybe<Scalars['Int']>,
  height_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  mass_not?: Maybe<Scalars['Float']>,
  mass_in?: Maybe<Array<Scalars['Float']>>,
  mass_not_in?: Maybe<Array<Scalars['Float']>>,
  mass_lt?: Maybe<Scalars['Float']>,
  mass_lte?: Maybe<Scalars['Float']>,
  mass_gt?: Maybe<Scalars['Float']>,
  mass_gte?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  homeworld?: Maybe<PlanetFilter>,
  species_every?: Maybe<SpeciesFilter>,
  species_some?: Maybe<SpeciesFilter>,
  species_none?: Maybe<SpeciesFilter>,
  starships_every?: Maybe<StarshipFilter>,
  starships_some?: Maybe<StarshipFilter>,
  starships_none?: Maybe<StarshipFilter>,
  vehicles_every?: Maybe<VehicleFilter>,
  vehicles_some?: Maybe<VehicleFilter>,
  vehicles_none?: Maybe<VehicleFilter>,
};

export type PersonSubscriptionPayload = {
   __typename?: 'PersonSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Person>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PersonPreviousValues>,
};

export type PersonvehiclesVehicle = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  crew?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<VehiclefilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<VehiclepilotsPerson>>,
};

export type Planet = Node & {
   __typename?: 'Planet',
  climate?: Maybe<Array<Scalars['String']>>,
  createdAt: Scalars['DateTime'],
  diameter?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Film>>,
  gravity?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  name: Scalars['String'],
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  residents?: Maybe<Array<Person>>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  updatedAt: Scalars['DateTime'],
  _filmsMeta: _QueryMeta,
  _residentsMeta: _QueryMeta,
};


export type PlanetFilmsArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type PlanetResidentsArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Planet_FilmsMetaArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Planet_ResidentsMetaArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type PlanetfilmsFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type PlanetFilter = {
  AND?: Maybe<Array<PlanetFilter>>,
  OR?: Maybe<Array<PlanetFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  diameter?: Maybe<Scalars['Int']>,
  diameter_not?: Maybe<Scalars['Int']>,
  diameter_in?: Maybe<Array<Scalars['Int']>>,
  diameter_not_in?: Maybe<Array<Scalars['Int']>>,
  diameter_lt?: Maybe<Scalars['Int']>,
  diameter_lte?: Maybe<Scalars['Int']>,
  diameter_gt?: Maybe<Scalars['Int']>,
  diameter_gte?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  gravity_not?: Maybe<Scalars['String']>,
  gravity_in?: Maybe<Array<Scalars['String']>>,
  gravity_not_in?: Maybe<Array<Scalars['String']>>,
  gravity_lt?: Maybe<Scalars['String']>,
  gravity_lte?: Maybe<Scalars['String']>,
  gravity_gt?: Maybe<Scalars['String']>,
  gravity_gte?: Maybe<Scalars['String']>,
  gravity_contains?: Maybe<Scalars['String']>,
  gravity_not_contains?: Maybe<Scalars['String']>,
  gravity_starts_with?: Maybe<Scalars['String']>,
  gravity_not_starts_with?: Maybe<Scalars['String']>,
  gravity_ends_with?: Maybe<Scalars['String']>,
  gravity_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  orbitalPeriod?: Maybe<Scalars['Int']>,
  orbitalPeriod_not?: Maybe<Scalars['Int']>,
  orbitalPeriod_in?: Maybe<Array<Scalars['Int']>>,
  orbitalPeriod_not_in?: Maybe<Array<Scalars['Int']>>,
  orbitalPeriod_lt?: Maybe<Scalars['Int']>,
  orbitalPeriod_lte?: Maybe<Scalars['Int']>,
  orbitalPeriod_gt?: Maybe<Scalars['Int']>,
  orbitalPeriod_gte?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  population_not?: Maybe<Scalars['Float']>,
  population_in?: Maybe<Array<Scalars['Float']>>,
  population_not_in?: Maybe<Array<Scalars['Float']>>,
  population_lt?: Maybe<Scalars['Float']>,
  population_lte?: Maybe<Scalars['Float']>,
  population_gt?: Maybe<Scalars['Float']>,
  population_gte?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  rotationPeriod_not?: Maybe<Scalars['Int']>,
  rotationPeriod_in?: Maybe<Array<Scalars['Int']>>,
  rotationPeriod_not_in?: Maybe<Array<Scalars['Int']>>,
  rotationPeriod_lt?: Maybe<Scalars['Int']>,
  rotationPeriod_lte?: Maybe<Scalars['Int']>,
  rotationPeriod_gt?: Maybe<Scalars['Int']>,
  rotationPeriod_gte?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  surfaceWater_not?: Maybe<Scalars['Float']>,
  surfaceWater_in?: Maybe<Array<Scalars['Float']>>,
  surfaceWater_not_in?: Maybe<Array<Scalars['Float']>>,
  surfaceWater_lt?: Maybe<Scalars['Float']>,
  surfaceWater_lte?: Maybe<Scalars['Float']>,
  surfaceWater_gt?: Maybe<Scalars['Float']>,
  surfaceWater_gte?: Maybe<Scalars['Float']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  residents_every?: Maybe<PersonFilter>,
  residents_some?: Maybe<PersonFilter>,
  residents_none?: Maybe<PersonFilter>,
};

export enum PlanetOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DiameterAsc = 'diameter_ASC',
  DiameterDesc = 'diameter_DESC',
  GravityAsc = 'gravity_ASC',
  GravityDesc = 'gravity_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrbitalPeriodAsc = 'orbitalPeriod_ASC',
  OrbitalPeriodDesc = 'orbitalPeriod_DESC',
  PopulationAsc = 'population_ASC',
  PopulationDesc = 'population_DESC',
  RotationPeriodAsc = 'rotationPeriod_ASC',
  RotationPeriodDesc = 'rotationPeriod_DESC',
  SurfaceWaterAsc = 'surfaceWater_ASC',
  SurfaceWaterDesc = 'surfaceWater_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PlanetPreviousValues = {
   __typename?: 'PlanetPreviousValues',
  climate?: Maybe<Array<Scalars['String']>>,
  createdAt: Scalars['DateTime'],
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  name: Scalars['String'],
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  updatedAt: Scalars['DateTime'],
};

export type PlanetresidentsPerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type PlanetSubscriptionFilter = {
  AND?: Maybe<Array<PlanetSubscriptionFilter>>,
  OR?: Maybe<Array<PlanetSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PlanetSubscriptionFilterNode>,
};

export type PlanetSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  diameter?: Maybe<Scalars['Int']>,
  diameter_not?: Maybe<Scalars['Int']>,
  diameter_in?: Maybe<Array<Scalars['Int']>>,
  diameter_not_in?: Maybe<Array<Scalars['Int']>>,
  diameter_lt?: Maybe<Scalars['Int']>,
  diameter_lte?: Maybe<Scalars['Int']>,
  diameter_gt?: Maybe<Scalars['Int']>,
  diameter_gte?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  gravity_not?: Maybe<Scalars['String']>,
  gravity_in?: Maybe<Array<Scalars['String']>>,
  gravity_not_in?: Maybe<Array<Scalars['String']>>,
  gravity_lt?: Maybe<Scalars['String']>,
  gravity_lte?: Maybe<Scalars['String']>,
  gravity_gt?: Maybe<Scalars['String']>,
  gravity_gte?: Maybe<Scalars['String']>,
  gravity_contains?: Maybe<Scalars['String']>,
  gravity_not_contains?: Maybe<Scalars['String']>,
  gravity_starts_with?: Maybe<Scalars['String']>,
  gravity_not_starts_with?: Maybe<Scalars['String']>,
  gravity_ends_with?: Maybe<Scalars['String']>,
  gravity_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  orbitalPeriod?: Maybe<Scalars['Int']>,
  orbitalPeriod_not?: Maybe<Scalars['Int']>,
  orbitalPeriod_in?: Maybe<Array<Scalars['Int']>>,
  orbitalPeriod_not_in?: Maybe<Array<Scalars['Int']>>,
  orbitalPeriod_lt?: Maybe<Scalars['Int']>,
  orbitalPeriod_lte?: Maybe<Scalars['Int']>,
  orbitalPeriod_gt?: Maybe<Scalars['Int']>,
  orbitalPeriod_gte?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  population_not?: Maybe<Scalars['Float']>,
  population_in?: Maybe<Array<Scalars['Float']>>,
  population_not_in?: Maybe<Array<Scalars['Float']>>,
  population_lt?: Maybe<Scalars['Float']>,
  population_lte?: Maybe<Scalars['Float']>,
  population_gt?: Maybe<Scalars['Float']>,
  population_gte?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  rotationPeriod_not?: Maybe<Scalars['Int']>,
  rotationPeriod_in?: Maybe<Array<Scalars['Int']>>,
  rotationPeriod_not_in?: Maybe<Array<Scalars['Int']>>,
  rotationPeriod_lt?: Maybe<Scalars['Int']>,
  rotationPeriod_lte?: Maybe<Scalars['Int']>,
  rotationPeriod_gt?: Maybe<Scalars['Int']>,
  rotationPeriod_gte?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  surfaceWater_not?: Maybe<Scalars['Float']>,
  surfaceWater_in?: Maybe<Array<Scalars['Float']>>,
  surfaceWater_not_in?: Maybe<Array<Scalars['Float']>>,
  surfaceWater_lt?: Maybe<Scalars['Float']>,
  surfaceWater_lte?: Maybe<Scalars['Float']>,
  surfaceWater_gt?: Maybe<Scalars['Float']>,
  surfaceWater_gte?: Maybe<Scalars['Float']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  residents_every?: Maybe<PersonFilter>,
  residents_some?: Maybe<PersonFilter>,
  residents_none?: Maybe<PersonFilter>,
};

export type PlanetSubscriptionPayload = {
   __typename?: 'PlanetSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Planet>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PlanetPreviousValues>,
};

export type Query = {
   __typename?: 'Query',
  allAssets: Array<Asset>,
  allFilms: Array<Film>,
  allPersons: Array<Person>,
  allPlanets: Array<Planet>,
  allSpecies: Array<Species>,
  allStarships: Array<Starship>,
  allVehicles: Array<Vehicle>,
  _allAssetsMeta: _QueryMeta,
  _allFilmsMeta: _QueryMeta,
  _allPersonsMeta: _QueryMeta,
  _allPlanetsMeta: _QueryMeta,
  _allSpeciesMeta: _QueryMeta,
  _allStarshipsMeta: _QueryMeta,
  _allVehiclesMeta: _QueryMeta,
  Asset?: Maybe<Asset>,
  Film?: Maybe<Film>,
  Person?: Maybe<Person>,
  Planet?: Maybe<Planet>,
  Species?: Maybe<Species>,
  Starship?: Maybe<Starship>,
  Vehicle?: Maybe<Vehicle>,
  node?: Maybe<Node>,
};


export type QueryAllAssetsArgs = {
  filter?: Maybe<AssetFilter>,
  orderBy?: Maybe<AssetOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllFilmsArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllPersonsArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllPlanetsArgs = {
  filter?: Maybe<PlanetFilter>,
  orderBy?: Maybe<PlanetOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllSpeciesArgs = {
  filter?: Maybe<SpeciesFilter>,
  orderBy?: Maybe<SpeciesOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllStarshipsArgs = {
  filter?: Maybe<StarshipFilter>,
  orderBy?: Maybe<StarshipOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllVehiclesArgs = {
  filter?: Maybe<VehicleFilter>,
  orderBy?: Maybe<VehicleOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllAssetsMetaArgs = {
  filter?: Maybe<AssetFilter>,
  orderBy?: Maybe<AssetOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllFilmsMetaArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllPersonsMetaArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllPlanetsMetaArgs = {
  filter?: Maybe<PlanetFilter>,
  orderBy?: Maybe<PlanetOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllSpeciesMetaArgs = {
  filter?: Maybe<SpeciesFilter>,
  orderBy?: Maybe<SpeciesOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllStarshipsMetaArgs = {
  filter?: Maybe<StarshipFilter>,
  orderBy?: Maybe<StarshipOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllVehiclesMetaArgs = {
  filter?: Maybe<VehicleFilter>,
  orderBy?: Maybe<VehicleOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAssetArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryFilmArgs = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>
};


export type QueryPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>
};


export type QueryPlanetArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>
};


export type QuerySpeciesArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>
};


export type QueryStarshipArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>
};


export type QueryVehicleArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type RemoveFromFilmPlanetsPayload = {
   __typename?: 'RemoveFromFilmPlanetsPayload',
  filmsFilm?: Maybe<Film>,
  planetsPlanet?: Maybe<Planet>,
};

export type RemoveFromFilmSpeciesPayload = {
   __typename?: 'RemoveFromFilmSpeciesPayload',
  filmsFilm?: Maybe<Film>,
  speciesSpecies?: Maybe<Species>,
};

export type RemoveFromFilmStarshipsPayload = {
   __typename?: 'RemoveFromFilmStarshipsPayload',
  filmsFilm?: Maybe<Film>,
  starshipsStarship?: Maybe<Starship>,
};

export type RemoveFromFilmVehiclesPayload = {
   __typename?: 'RemoveFromFilmVehiclesPayload',
  filmsFilm?: Maybe<Film>,
  vehiclesVehicle?: Maybe<Vehicle>,
};

export type RemoveFromPeopleFilmPayload = {
   __typename?: 'RemoveFromPeopleFilmPayload',
  charactersPerson?: Maybe<Person>,
  filmsFilm?: Maybe<Film>,
};

export type RemoveFromPeoplePlanetPayload = {
   __typename?: 'RemoveFromPeoplePlanetPayload',
  residentsPerson?: Maybe<Person>,
  homeworldPlanet?: Maybe<Planet>,
};

export type RemoveFromPeopleSpeciesPayload = {
   __typename?: 'RemoveFromPeopleSpeciesPayload',
  peoplePerson?: Maybe<Person>,
  speciesSpecies?: Maybe<Species>,
};

export type RemoveFromPeopleStarshipsPayload = {
   __typename?: 'RemoveFromPeopleStarshipsPayload',
  pilotsPerson?: Maybe<Person>,
  starshipsStarship?: Maybe<Starship>,
};

export type RemoveFromPeopleVehiclesPayload = {
   __typename?: 'RemoveFromPeopleVehiclesPayload',
  pilotsPerson?: Maybe<Person>,
  vehiclesVehicle?: Maybe<Vehicle>,
};

export type Species = Node & {
   __typename?: 'Species',
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  films?: Maybe<Array<Film>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  language?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  people?: Maybe<Array<Person>>,
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  updatedAt: Scalars['DateTime'],
  _filmsMeta: _QueryMeta,
  _peopleMeta: _QueryMeta,
};


export type SpeciesFilmsArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type SpeciesPeopleArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Species_FilmsMetaArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Species_PeopleMetaArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum Species_Eye_Color {
  Amber = 'AMBER',
  Black = 'BLACK',
  Blue = 'BLUE',
  Brown = 'BROWN',
  Gold = 'GOLD',
  Green = 'GREEN',
  Grey = 'GREY',
  Hazel = 'HAZEL',
  Indigo = 'INDIGO',
  Orange = 'ORANGE',
  Pink = 'PINK',
  Red = 'RED',
  Silver = 'SILVER',
  Unknown = 'UNKNOWN',
  Yellow = 'YELLOW',
  Golden = 'GOLDEN'
}

export enum Species_Hair_Color {
  Unknown = 'UNKNOWN',
  Brown = 'BROWN',
  White = 'WHITE',
  Red = 'RED',
  Black = 'BLACK',
  Blonde = 'BLONDE'
}

export enum Species_Skin_Color {
  Blue = 'BLUE',
  Brown = 'BROWN',
  Caucasian = 'CAUCASIAN',
  Dark = 'DARK',
  Green = 'GREEN',
  Grey = 'GREY',
  Magenta = 'MAGENTA',
  Orange = 'ORANGE',
  Pale = 'PALE',
  Palepink = 'PALEPINK',
  Peach = 'PEACH',
  Pink = 'PINK',
  Purple = 'PURPLE',
  Red = 'RED',
  Tan = 'TAN',
  Unknown = 'UNKNOWN',
  White = 'WHITE',
  Yellow = 'YELLOW',
  Black = 'BLACK',
  Asian = 'ASIAN',
  Hispanic = 'HISPANIC'
}

export type SpeciesfilmsFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type SpeciesFilter = {
  AND?: Maybe<Array<SpeciesFilter>>,
  OR?: Maybe<Array<SpeciesFilter>>,
  averageHeight?: Maybe<Scalars['Int']>,
  averageHeight_not?: Maybe<Scalars['Int']>,
  averageHeight_in?: Maybe<Array<Scalars['Int']>>,
  averageHeight_not_in?: Maybe<Array<Scalars['Int']>>,
  averageHeight_lt?: Maybe<Scalars['Int']>,
  averageHeight_lte?: Maybe<Scalars['Int']>,
  averageHeight_gt?: Maybe<Scalars['Int']>,
  averageHeight_gte?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  averageLifespan_not?: Maybe<Scalars['Int']>,
  averageLifespan_in?: Maybe<Array<Scalars['Int']>>,
  averageLifespan_not_in?: Maybe<Array<Scalars['Int']>>,
  averageLifespan_lt?: Maybe<Scalars['Int']>,
  averageLifespan_lte?: Maybe<Scalars['Int']>,
  averageLifespan_gt?: Maybe<Scalars['Int']>,
  averageLifespan_gte?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  classification_not?: Maybe<Scalars['String']>,
  classification_in?: Maybe<Array<Scalars['String']>>,
  classification_not_in?: Maybe<Array<Scalars['String']>>,
  classification_lt?: Maybe<Scalars['String']>,
  classification_lte?: Maybe<Scalars['String']>,
  classification_gt?: Maybe<Scalars['String']>,
  classification_gte?: Maybe<Scalars['String']>,
  classification_contains?: Maybe<Scalars['String']>,
  classification_not_contains?: Maybe<Scalars['String']>,
  classification_starts_with?: Maybe<Scalars['String']>,
  classification_not_starts_with?: Maybe<Scalars['String']>,
  classification_ends_with?: Maybe<Scalars['String']>,
  classification_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  designation?: Maybe<Scalars['String']>,
  designation_not?: Maybe<Scalars['String']>,
  designation_in?: Maybe<Array<Scalars['String']>>,
  designation_not_in?: Maybe<Array<Scalars['String']>>,
  designation_lt?: Maybe<Scalars['String']>,
  designation_lte?: Maybe<Scalars['String']>,
  designation_gt?: Maybe<Scalars['String']>,
  designation_gte?: Maybe<Scalars['String']>,
  designation_contains?: Maybe<Scalars['String']>,
  designation_not_contains?: Maybe<Scalars['String']>,
  designation_starts_with?: Maybe<Scalars['String']>,
  designation_not_starts_with?: Maybe<Scalars['String']>,
  designation_ends_with?: Maybe<Scalars['String']>,
  designation_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  language_not?: Maybe<Scalars['String']>,
  language_in?: Maybe<Array<Scalars['String']>>,
  language_not_in?: Maybe<Array<Scalars['String']>>,
  language_lt?: Maybe<Scalars['String']>,
  language_lte?: Maybe<Scalars['String']>,
  language_gt?: Maybe<Scalars['String']>,
  language_gte?: Maybe<Scalars['String']>,
  language_contains?: Maybe<Scalars['String']>,
  language_not_contains?: Maybe<Scalars['String']>,
  language_starts_with?: Maybe<Scalars['String']>,
  language_not_starts_with?: Maybe<Scalars['String']>,
  language_ends_with?: Maybe<Scalars['String']>,
  language_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  people_every?: Maybe<PersonFilter>,
  people_some?: Maybe<PersonFilter>,
  people_none?: Maybe<PersonFilter>,
};

export enum SpeciesOrderBy {
  AverageHeightAsc = 'averageHeight_ASC',
  AverageHeightDesc = 'averageHeight_DESC',
  AverageLifespanAsc = 'averageLifespan_ASC',
  AverageLifespanDesc = 'averageLifespan_DESC',
  ClassificationAsc = 'classification_ASC',
  ClassificationDesc = 'classification_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DesignationAsc = 'designation_ASC',
  DesignationDesc = 'designation_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SpeciespeoplePerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type SpeciesPreviousValues = {
   __typename?: 'SpeciesPreviousValues',
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  language?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  updatedAt: Scalars['DateTime'],
};

export type SpeciesSubscriptionFilter = {
  AND?: Maybe<Array<SpeciesSubscriptionFilter>>,
  OR?: Maybe<Array<SpeciesSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<SpeciesSubscriptionFilterNode>,
};

export type SpeciesSubscriptionFilterNode = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageHeight_not?: Maybe<Scalars['Int']>,
  averageHeight_in?: Maybe<Array<Scalars['Int']>>,
  averageHeight_not_in?: Maybe<Array<Scalars['Int']>>,
  averageHeight_lt?: Maybe<Scalars['Int']>,
  averageHeight_lte?: Maybe<Scalars['Int']>,
  averageHeight_gt?: Maybe<Scalars['Int']>,
  averageHeight_gte?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  averageLifespan_not?: Maybe<Scalars['Int']>,
  averageLifespan_in?: Maybe<Array<Scalars['Int']>>,
  averageLifespan_not_in?: Maybe<Array<Scalars['Int']>>,
  averageLifespan_lt?: Maybe<Scalars['Int']>,
  averageLifespan_lte?: Maybe<Scalars['Int']>,
  averageLifespan_gt?: Maybe<Scalars['Int']>,
  averageLifespan_gte?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  classification_not?: Maybe<Scalars['String']>,
  classification_in?: Maybe<Array<Scalars['String']>>,
  classification_not_in?: Maybe<Array<Scalars['String']>>,
  classification_lt?: Maybe<Scalars['String']>,
  classification_lte?: Maybe<Scalars['String']>,
  classification_gt?: Maybe<Scalars['String']>,
  classification_gte?: Maybe<Scalars['String']>,
  classification_contains?: Maybe<Scalars['String']>,
  classification_not_contains?: Maybe<Scalars['String']>,
  classification_starts_with?: Maybe<Scalars['String']>,
  classification_not_starts_with?: Maybe<Scalars['String']>,
  classification_ends_with?: Maybe<Scalars['String']>,
  classification_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  designation?: Maybe<Scalars['String']>,
  designation_not?: Maybe<Scalars['String']>,
  designation_in?: Maybe<Array<Scalars['String']>>,
  designation_not_in?: Maybe<Array<Scalars['String']>>,
  designation_lt?: Maybe<Scalars['String']>,
  designation_lte?: Maybe<Scalars['String']>,
  designation_gt?: Maybe<Scalars['String']>,
  designation_gte?: Maybe<Scalars['String']>,
  designation_contains?: Maybe<Scalars['String']>,
  designation_not_contains?: Maybe<Scalars['String']>,
  designation_starts_with?: Maybe<Scalars['String']>,
  designation_not_starts_with?: Maybe<Scalars['String']>,
  designation_ends_with?: Maybe<Scalars['String']>,
  designation_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  language_not?: Maybe<Scalars['String']>,
  language_in?: Maybe<Array<Scalars['String']>>,
  language_not_in?: Maybe<Array<Scalars['String']>>,
  language_lt?: Maybe<Scalars['String']>,
  language_lte?: Maybe<Scalars['String']>,
  language_gt?: Maybe<Scalars['String']>,
  language_gte?: Maybe<Scalars['String']>,
  language_contains?: Maybe<Scalars['String']>,
  language_not_contains?: Maybe<Scalars['String']>,
  language_starts_with?: Maybe<Scalars['String']>,
  language_not_starts_with?: Maybe<Scalars['String']>,
  language_ends_with?: Maybe<Scalars['String']>,
  language_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  people_every?: Maybe<PersonFilter>,
  people_some?: Maybe<PersonFilter>,
  people_none?: Maybe<PersonFilter>,
};

export type SpeciesSubscriptionPayload = {
   __typename?: 'SpeciesSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Species>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<SpeciesPreviousValues>,
};

export type Starship = Node & {
   __typename?: 'Starship',
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  createdAt: Scalars['DateTime'],
  crew?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Film>>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  pilots?: Maybe<Array<Person>>,
  updatedAt: Scalars['DateTime'],
  _filmsMeta: _QueryMeta,
  _pilotsMeta: _QueryMeta,
};


export type StarshipFilmsArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type StarshipPilotsArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Starship_FilmsMetaArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Starship_PilotsMetaArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type StarshipfilmsFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type StarshipFilter = {
  AND?: Maybe<Array<StarshipFilter>>,
  OR?: Maybe<Array<StarshipFilter>>,
  cargoCapacity?: Maybe<Scalars['Float']>,
  cargoCapacity_not?: Maybe<Scalars['Float']>,
  cargoCapacity_in?: Maybe<Array<Scalars['Float']>>,
  cargoCapacity_not_in?: Maybe<Array<Scalars['Float']>>,
  cargoCapacity_lt?: Maybe<Scalars['Float']>,
  cargoCapacity_lte?: Maybe<Scalars['Float']>,
  cargoCapacity_gt?: Maybe<Scalars['Float']>,
  cargoCapacity_gte?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  class_not?: Maybe<Scalars['String']>,
  class_in?: Maybe<Array<Scalars['String']>>,
  class_not_in?: Maybe<Array<Scalars['String']>>,
  class_lt?: Maybe<Scalars['String']>,
  class_lte?: Maybe<Scalars['String']>,
  class_gt?: Maybe<Scalars['String']>,
  class_gte?: Maybe<Scalars['String']>,
  class_contains?: Maybe<Scalars['String']>,
  class_not_contains?: Maybe<Scalars['String']>,
  class_starts_with?: Maybe<Scalars['String']>,
  class_not_starts_with?: Maybe<Scalars['String']>,
  class_ends_with?: Maybe<Scalars['String']>,
  class_not_ends_with?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  consumables_not?: Maybe<Scalars['String']>,
  consumables_in?: Maybe<Array<Scalars['String']>>,
  consumables_not_in?: Maybe<Array<Scalars['String']>>,
  consumables_lt?: Maybe<Scalars['String']>,
  consumables_lte?: Maybe<Scalars['String']>,
  consumables_gt?: Maybe<Scalars['String']>,
  consumables_gte?: Maybe<Scalars['String']>,
  consumables_contains?: Maybe<Scalars['String']>,
  consumables_not_contains?: Maybe<Scalars['String']>,
  consumables_starts_with?: Maybe<Scalars['String']>,
  consumables_not_starts_with?: Maybe<Scalars['String']>,
  consumables_ends_with?: Maybe<Scalars['String']>,
  consumables_not_ends_with?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  costInCredits_not?: Maybe<Scalars['Float']>,
  costInCredits_in?: Maybe<Array<Scalars['Float']>>,
  costInCredits_not_in?: Maybe<Array<Scalars['Float']>>,
  costInCredits_lt?: Maybe<Scalars['Float']>,
  costInCredits_lte?: Maybe<Scalars['Float']>,
  costInCredits_gt?: Maybe<Scalars['Float']>,
  costInCredits_gte?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  crew?: Maybe<Scalars['Int']>,
  crew_not?: Maybe<Scalars['Int']>,
  crew_in?: Maybe<Array<Scalars['Int']>>,
  crew_not_in?: Maybe<Array<Scalars['Int']>>,
  crew_lt?: Maybe<Scalars['Int']>,
  crew_lte?: Maybe<Scalars['Int']>,
  crew_gt?: Maybe<Scalars['Int']>,
  crew_gte?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  hyperdriveRating_not?: Maybe<Scalars['Float']>,
  hyperdriveRating_in?: Maybe<Array<Scalars['Float']>>,
  hyperdriveRating_not_in?: Maybe<Array<Scalars['Float']>>,
  hyperdriveRating_lt?: Maybe<Scalars['Float']>,
  hyperdriveRating_lte?: Maybe<Scalars['Float']>,
  hyperdriveRating_gt?: Maybe<Scalars['Float']>,
  hyperdriveRating_gte?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  length_not?: Maybe<Scalars['Float']>,
  length_in?: Maybe<Array<Scalars['Float']>>,
  length_not_in?: Maybe<Array<Scalars['Float']>>,
  length_lt?: Maybe<Scalars['Float']>,
  length_lte?: Maybe<Scalars['Float']>,
  length_gt?: Maybe<Scalars['Float']>,
  length_gte?: Maybe<Scalars['Float']>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  mglt_not?: Maybe<Scalars['Int']>,
  mglt_in?: Maybe<Array<Scalars['Int']>>,
  mglt_not_in?: Maybe<Array<Scalars['Int']>>,
  mglt_lt?: Maybe<Scalars['Int']>,
  mglt_lte?: Maybe<Scalars['Int']>,
  mglt_gt?: Maybe<Scalars['Int']>,
  mglt_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  passengers_not?: Maybe<Scalars['Int']>,
  passengers_in?: Maybe<Array<Scalars['Int']>>,
  passengers_not_in?: Maybe<Array<Scalars['Int']>>,
  passengers_lt?: Maybe<Scalars['Int']>,
  passengers_lte?: Maybe<Scalars['Int']>,
  passengers_gt?: Maybe<Scalars['Int']>,
  passengers_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  pilots_every?: Maybe<PersonFilter>,
  pilots_some?: Maybe<PersonFilter>,
  pilots_none?: Maybe<PersonFilter>,
};

export enum StarshipOrderBy {
  CargoCapacityAsc = 'cargoCapacity_ASC',
  CargoCapacityDesc = 'cargoCapacity_DESC',
  ClassAsc = 'class_ASC',
  ClassDesc = 'class_DESC',
  ConsumablesAsc = 'consumables_ASC',
  ConsumablesDesc = 'consumables_DESC',
  CostInCreditsAsc = 'costInCredits_ASC',
  CostInCreditsDesc = 'costInCredits_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CrewAsc = 'crew_ASC',
  CrewDesc = 'crew_DESC',
  HyperdriveRatingAsc = 'hyperdriveRating_ASC',
  HyperdriveRatingDesc = 'hyperdriveRating_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  MaxAtmospheringSpeedAsc = 'maxAtmospheringSpeed_ASC',
  MaxAtmospheringSpeedDesc = 'maxAtmospheringSpeed_DESC',
  MgltAsc = 'mglt_ASC',
  MgltDesc = 'mglt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PassengersAsc = 'passengers_ASC',
  PassengersDesc = 'passengers_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StarshippilotsPerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type StarshipPreviousValues = {
   __typename?: 'StarshipPreviousValues',
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  createdAt: Scalars['DateTime'],
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
};

export type StarshipSubscriptionFilter = {
  AND?: Maybe<Array<StarshipSubscriptionFilter>>,
  OR?: Maybe<Array<StarshipSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<StarshipSubscriptionFilterNode>,
};

export type StarshipSubscriptionFilterNode = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  cargoCapacity_not?: Maybe<Scalars['Float']>,
  cargoCapacity_in?: Maybe<Array<Scalars['Float']>>,
  cargoCapacity_not_in?: Maybe<Array<Scalars['Float']>>,
  cargoCapacity_lt?: Maybe<Scalars['Float']>,
  cargoCapacity_lte?: Maybe<Scalars['Float']>,
  cargoCapacity_gt?: Maybe<Scalars['Float']>,
  cargoCapacity_gte?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  class_not?: Maybe<Scalars['String']>,
  class_in?: Maybe<Array<Scalars['String']>>,
  class_not_in?: Maybe<Array<Scalars['String']>>,
  class_lt?: Maybe<Scalars['String']>,
  class_lte?: Maybe<Scalars['String']>,
  class_gt?: Maybe<Scalars['String']>,
  class_gte?: Maybe<Scalars['String']>,
  class_contains?: Maybe<Scalars['String']>,
  class_not_contains?: Maybe<Scalars['String']>,
  class_starts_with?: Maybe<Scalars['String']>,
  class_not_starts_with?: Maybe<Scalars['String']>,
  class_ends_with?: Maybe<Scalars['String']>,
  class_not_ends_with?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  consumables_not?: Maybe<Scalars['String']>,
  consumables_in?: Maybe<Array<Scalars['String']>>,
  consumables_not_in?: Maybe<Array<Scalars['String']>>,
  consumables_lt?: Maybe<Scalars['String']>,
  consumables_lte?: Maybe<Scalars['String']>,
  consumables_gt?: Maybe<Scalars['String']>,
  consumables_gte?: Maybe<Scalars['String']>,
  consumables_contains?: Maybe<Scalars['String']>,
  consumables_not_contains?: Maybe<Scalars['String']>,
  consumables_starts_with?: Maybe<Scalars['String']>,
  consumables_not_starts_with?: Maybe<Scalars['String']>,
  consumables_ends_with?: Maybe<Scalars['String']>,
  consumables_not_ends_with?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  costInCredits_not?: Maybe<Scalars['Float']>,
  costInCredits_in?: Maybe<Array<Scalars['Float']>>,
  costInCredits_not_in?: Maybe<Array<Scalars['Float']>>,
  costInCredits_lt?: Maybe<Scalars['Float']>,
  costInCredits_lte?: Maybe<Scalars['Float']>,
  costInCredits_gt?: Maybe<Scalars['Float']>,
  costInCredits_gte?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  crew?: Maybe<Scalars['Int']>,
  crew_not?: Maybe<Scalars['Int']>,
  crew_in?: Maybe<Array<Scalars['Int']>>,
  crew_not_in?: Maybe<Array<Scalars['Int']>>,
  crew_lt?: Maybe<Scalars['Int']>,
  crew_lte?: Maybe<Scalars['Int']>,
  crew_gt?: Maybe<Scalars['Int']>,
  crew_gte?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  hyperdriveRating_not?: Maybe<Scalars['Float']>,
  hyperdriveRating_in?: Maybe<Array<Scalars['Float']>>,
  hyperdriveRating_not_in?: Maybe<Array<Scalars['Float']>>,
  hyperdriveRating_lt?: Maybe<Scalars['Float']>,
  hyperdriveRating_lte?: Maybe<Scalars['Float']>,
  hyperdriveRating_gt?: Maybe<Scalars['Float']>,
  hyperdriveRating_gte?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  length_not?: Maybe<Scalars['Float']>,
  length_in?: Maybe<Array<Scalars['Float']>>,
  length_not_in?: Maybe<Array<Scalars['Float']>>,
  length_lt?: Maybe<Scalars['Float']>,
  length_lte?: Maybe<Scalars['Float']>,
  length_gt?: Maybe<Scalars['Float']>,
  length_gte?: Maybe<Scalars['Float']>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  mglt_not?: Maybe<Scalars['Int']>,
  mglt_in?: Maybe<Array<Scalars['Int']>>,
  mglt_not_in?: Maybe<Array<Scalars['Int']>>,
  mglt_lt?: Maybe<Scalars['Int']>,
  mglt_lte?: Maybe<Scalars['Int']>,
  mglt_gt?: Maybe<Scalars['Int']>,
  mglt_gte?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  passengers_not?: Maybe<Scalars['Int']>,
  passengers_in?: Maybe<Array<Scalars['Int']>>,
  passengers_not_in?: Maybe<Array<Scalars['Int']>>,
  passengers_lt?: Maybe<Scalars['Int']>,
  passengers_lte?: Maybe<Scalars['Int']>,
  passengers_gt?: Maybe<Scalars['Int']>,
  passengers_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  pilots_every?: Maybe<PersonFilter>,
  pilots_some?: Maybe<PersonFilter>,
  pilots_none?: Maybe<PersonFilter>,
};

export type StarshipSubscriptionPayload = {
   __typename?: 'StarshipSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Starship>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<StarshipPreviousValues>,
};

export type Subscription = {
   __typename?: 'Subscription',
  Asset?: Maybe<AssetSubscriptionPayload>,
  Film?: Maybe<FilmSubscriptionPayload>,
  Person?: Maybe<PersonSubscriptionPayload>,
  Planet?: Maybe<PlanetSubscriptionPayload>,
  Species?: Maybe<SpeciesSubscriptionPayload>,
  Starship?: Maybe<StarshipSubscriptionPayload>,
  Vehicle?: Maybe<VehicleSubscriptionPayload>,
};


export type SubscriptionAssetArgs = {
  filter?: Maybe<AssetSubscriptionFilter>
};


export type SubscriptionFilmArgs = {
  filter?: Maybe<FilmSubscriptionFilter>
};


export type SubscriptionPersonArgs = {
  filter?: Maybe<PersonSubscriptionFilter>
};


export type SubscriptionPlanetArgs = {
  filter?: Maybe<PlanetSubscriptionFilter>
};


export type SubscriptionSpeciesArgs = {
  filter?: Maybe<SpeciesSubscriptionFilter>
};


export type SubscriptionStarshipArgs = {
  filter?: Maybe<StarshipSubscriptionFilter>
};


export type SubscriptionVehicleArgs = {
  filter?: Maybe<VehicleSubscriptionFilter>
};

export type UpdateAsset = {
  fileName?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  url?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Float']>,
};

export type UpdateFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type UpdatePerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type UpdatePlanet = {
  climate?: Maybe<Array<Scalars['String']>>,
  diameter?: Maybe<Scalars['Int']>,
  gravity?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  orbitalPeriod?: Maybe<Scalars['Int']>,
  population?: Maybe<Scalars['Float']>,
  rotationPeriod?: Maybe<Scalars['Int']>,
  surfaceWater?: Maybe<Scalars['Float']>,
  terrain?: Maybe<Array<Scalars['String']>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PlanetfilmsFilm>>,
  residentsIds?: Maybe<Array<Scalars['ID']>>,
  residents?: Maybe<Array<PlanetresidentsPerson>>,
};

export type UpdateSpecies = {
  averageHeight?: Maybe<Scalars['Int']>,
  averageLifespan?: Maybe<Scalars['Int']>,
  classification?: Maybe<Scalars['String']>,
  designation?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Species_Eye_Color>>,
  hairColor?: Maybe<Array<Species_Hair_Color>>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  skinColor?: Maybe<Array<Species_Skin_Color>>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<SpeciesfilmsFilm>>,
  peopleIds?: Maybe<Array<Scalars['ID']>>,
  people?: Maybe<Array<SpeciespeoplePerson>>,
};

export type UpdateStarship = {
  cargoCapacity?: Maybe<Scalars['Float']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Float']>,
  crew?: Maybe<Scalars['Int']>,
  hyperdriveRating?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  mglt?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<StarshipfilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<StarshippilotsPerson>>,
};

export type UpdateVehicle = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  crew?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<VehiclefilmsFilm>>,
  pilotsIds?: Maybe<Array<Scalars['ID']>>,
  pilots?: Maybe<Array<VehiclepilotsPerson>>,
};

export type Vehicle = Node & {
   __typename?: 'Vehicle',
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  createdAt: Scalars['DateTime'],
  crew?: Maybe<Scalars['Int']>,
  films?: Maybe<Array<Film>>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  pilots?: Maybe<Array<Person>>,
  updatedAt: Scalars['DateTime'],
  _filmsMeta: _QueryMeta,
  _pilotsMeta: _QueryMeta,
};


export type VehicleFilmsArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type VehiclePilotsArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Vehicle_FilmsMetaArgs = {
  filter?: Maybe<FilmFilter>,
  orderBy?: Maybe<FilmOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Vehicle_PilotsMetaArgs = {
  filter?: Maybe<PersonFilter>,
  orderBy?: Maybe<PersonOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type VehiclefilmsFilm = {
  director?: Maybe<Scalars['String']>,
  episodeId: Scalars['Int'],
  isPublished?: Maybe<Scalars['Boolean']>,
  openingCrawl?: Maybe<Scalars['String']>,
  producers?: Maybe<Array<Scalars['String']>>,
  releaseDate?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  charactersIds?: Maybe<Array<Scalars['ID']>>,
  characters?: Maybe<Array<FilmcharactersPerson>>,
  planetsIds?: Maybe<Array<Scalars['ID']>>,
  planets?: Maybe<Array<FilmplanetsPlanet>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<FilmspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<FilmstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<FilmvehiclesVehicle>>,
};

export type VehicleFilter = {
  AND?: Maybe<Array<VehicleFilter>>,
  OR?: Maybe<Array<VehicleFilter>>,
  cargoCapacity?: Maybe<Scalars['Int']>,
  cargoCapacity_not?: Maybe<Scalars['Int']>,
  cargoCapacity_in?: Maybe<Array<Scalars['Int']>>,
  cargoCapacity_not_in?: Maybe<Array<Scalars['Int']>>,
  cargoCapacity_lt?: Maybe<Scalars['Int']>,
  cargoCapacity_lte?: Maybe<Scalars['Int']>,
  cargoCapacity_gt?: Maybe<Scalars['Int']>,
  cargoCapacity_gte?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  class_not?: Maybe<Scalars['String']>,
  class_in?: Maybe<Array<Scalars['String']>>,
  class_not_in?: Maybe<Array<Scalars['String']>>,
  class_lt?: Maybe<Scalars['String']>,
  class_lte?: Maybe<Scalars['String']>,
  class_gt?: Maybe<Scalars['String']>,
  class_gte?: Maybe<Scalars['String']>,
  class_contains?: Maybe<Scalars['String']>,
  class_not_contains?: Maybe<Scalars['String']>,
  class_starts_with?: Maybe<Scalars['String']>,
  class_not_starts_with?: Maybe<Scalars['String']>,
  class_ends_with?: Maybe<Scalars['String']>,
  class_not_ends_with?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  consumables_not?: Maybe<Scalars['String']>,
  consumables_in?: Maybe<Array<Scalars['String']>>,
  consumables_not_in?: Maybe<Array<Scalars['String']>>,
  consumables_lt?: Maybe<Scalars['String']>,
  consumables_lte?: Maybe<Scalars['String']>,
  consumables_gt?: Maybe<Scalars['String']>,
  consumables_gte?: Maybe<Scalars['String']>,
  consumables_contains?: Maybe<Scalars['String']>,
  consumables_not_contains?: Maybe<Scalars['String']>,
  consumables_starts_with?: Maybe<Scalars['String']>,
  consumables_not_starts_with?: Maybe<Scalars['String']>,
  consumables_ends_with?: Maybe<Scalars['String']>,
  consumables_not_ends_with?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  costInCredits_not?: Maybe<Scalars['Int']>,
  costInCredits_in?: Maybe<Array<Scalars['Int']>>,
  costInCredits_not_in?: Maybe<Array<Scalars['Int']>>,
  costInCredits_lt?: Maybe<Scalars['Int']>,
  costInCredits_lte?: Maybe<Scalars['Int']>,
  costInCredits_gt?: Maybe<Scalars['Int']>,
  costInCredits_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  crew?: Maybe<Scalars['Int']>,
  crew_not?: Maybe<Scalars['Int']>,
  crew_in?: Maybe<Array<Scalars['Int']>>,
  crew_not_in?: Maybe<Array<Scalars['Int']>>,
  crew_lt?: Maybe<Scalars['Int']>,
  crew_lte?: Maybe<Scalars['Int']>,
  crew_gt?: Maybe<Scalars['Int']>,
  crew_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  length_not?: Maybe<Scalars['Float']>,
  length_in?: Maybe<Array<Scalars['Float']>>,
  length_not_in?: Maybe<Array<Scalars['Float']>>,
  length_lt?: Maybe<Scalars['Float']>,
  length_lte?: Maybe<Scalars['Float']>,
  length_gt?: Maybe<Scalars['Float']>,
  length_gte?: Maybe<Scalars['Float']>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  model_not?: Maybe<Scalars['String']>,
  model_in?: Maybe<Array<Scalars['String']>>,
  model_not_in?: Maybe<Array<Scalars['String']>>,
  model_lt?: Maybe<Scalars['String']>,
  model_lte?: Maybe<Scalars['String']>,
  model_gt?: Maybe<Scalars['String']>,
  model_gte?: Maybe<Scalars['String']>,
  model_contains?: Maybe<Scalars['String']>,
  model_not_contains?: Maybe<Scalars['String']>,
  model_starts_with?: Maybe<Scalars['String']>,
  model_not_starts_with?: Maybe<Scalars['String']>,
  model_ends_with?: Maybe<Scalars['String']>,
  model_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  passengers_not?: Maybe<Scalars['Int']>,
  passengers_in?: Maybe<Array<Scalars['Int']>>,
  passengers_not_in?: Maybe<Array<Scalars['Int']>>,
  passengers_lt?: Maybe<Scalars['Int']>,
  passengers_lte?: Maybe<Scalars['Int']>,
  passengers_gt?: Maybe<Scalars['Int']>,
  passengers_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  pilots_every?: Maybe<PersonFilter>,
  pilots_some?: Maybe<PersonFilter>,
  pilots_none?: Maybe<PersonFilter>,
};

export enum VehicleOrderBy {
  CargoCapacityAsc = 'cargoCapacity_ASC',
  CargoCapacityDesc = 'cargoCapacity_DESC',
  ClassAsc = 'class_ASC',
  ClassDesc = 'class_DESC',
  ConsumablesAsc = 'consumables_ASC',
  ConsumablesDesc = 'consumables_DESC',
  CostInCreditsAsc = 'costInCredits_ASC',
  CostInCreditsDesc = 'costInCredits_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CrewAsc = 'crew_ASC',
  CrewDesc = 'crew_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  MaxAtmospheringSpeedAsc = 'maxAtmospheringSpeed_ASC',
  MaxAtmospheringSpeedDesc = 'maxAtmospheringSpeed_DESC',
  ModelAsc = 'model_ASC',
  ModelDesc = 'model_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PassengersAsc = 'passengers_ASC',
  PassengersDesc = 'passengers_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type VehiclepilotsPerson = {
  birthYear?: Maybe<Scalars['String']>,
  eyeColor?: Maybe<Array<Person_Eye_Color>>,
  gender?: Maybe<Person_Gender>,
  hairColor?: Maybe<Array<Person_Hair_Color>>,
  height?: Maybe<Scalars['Int']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  mass?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  skinColor?: Maybe<Array<Person_Skin_Color>>,
  homeworldId?: Maybe<Scalars['ID']>,
  homeworld?: Maybe<PersonhomeworldPlanet>,
  filmsIds?: Maybe<Array<Scalars['ID']>>,
  films?: Maybe<Array<PersonfilmsFilm>>,
  speciesIds?: Maybe<Array<Scalars['ID']>>,
  species?: Maybe<Array<PersonspeciesSpecies>>,
  starshipsIds?: Maybe<Array<Scalars['ID']>>,
  starships?: Maybe<Array<PersonstarshipsStarship>>,
  vehiclesIds?: Maybe<Array<Scalars['ID']>>,
  vehicles?: Maybe<Array<PersonvehiclesVehicle>>,
};

export type VehiclePreviousValues = {
   __typename?: 'VehiclePreviousValues',
  cargoCapacity?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  createdAt: Scalars['DateTime'],
  crew?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  isPublished: Scalars['Boolean'],
  length?: Maybe<Scalars['Float']>,
  manufacturer?: Maybe<Array<Scalars['String']>>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  passengers?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['DateTime'],
};

export type VehicleSubscriptionFilter = {
  AND?: Maybe<Array<VehicleSubscriptionFilter>>,
  OR?: Maybe<Array<VehicleSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<VehicleSubscriptionFilterNode>,
};

export type VehicleSubscriptionFilterNode = {
  cargoCapacity?: Maybe<Scalars['Int']>,
  cargoCapacity_not?: Maybe<Scalars['Int']>,
  cargoCapacity_in?: Maybe<Array<Scalars['Int']>>,
  cargoCapacity_not_in?: Maybe<Array<Scalars['Int']>>,
  cargoCapacity_lt?: Maybe<Scalars['Int']>,
  cargoCapacity_lte?: Maybe<Scalars['Int']>,
  cargoCapacity_gt?: Maybe<Scalars['Int']>,
  cargoCapacity_gte?: Maybe<Scalars['Int']>,
  class?: Maybe<Scalars['String']>,
  class_not?: Maybe<Scalars['String']>,
  class_in?: Maybe<Array<Scalars['String']>>,
  class_not_in?: Maybe<Array<Scalars['String']>>,
  class_lt?: Maybe<Scalars['String']>,
  class_lte?: Maybe<Scalars['String']>,
  class_gt?: Maybe<Scalars['String']>,
  class_gte?: Maybe<Scalars['String']>,
  class_contains?: Maybe<Scalars['String']>,
  class_not_contains?: Maybe<Scalars['String']>,
  class_starts_with?: Maybe<Scalars['String']>,
  class_not_starts_with?: Maybe<Scalars['String']>,
  class_ends_with?: Maybe<Scalars['String']>,
  class_not_ends_with?: Maybe<Scalars['String']>,
  consumables?: Maybe<Scalars['String']>,
  consumables_not?: Maybe<Scalars['String']>,
  consumables_in?: Maybe<Array<Scalars['String']>>,
  consumables_not_in?: Maybe<Array<Scalars['String']>>,
  consumables_lt?: Maybe<Scalars['String']>,
  consumables_lte?: Maybe<Scalars['String']>,
  consumables_gt?: Maybe<Scalars['String']>,
  consumables_gte?: Maybe<Scalars['String']>,
  consumables_contains?: Maybe<Scalars['String']>,
  consumables_not_contains?: Maybe<Scalars['String']>,
  consumables_starts_with?: Maybe<Scalars['String']>,
  consumables_not_starts_with?: Maybe<Scalars['String']>,
  consumables_ends_with?: Maybe<Scalars['String']>,
  consumables_not_ends_with?: Maybe<Scalars['String']>,
  costInCredits?: Maybe<Scalars['Int']>,
  costInCredits_not?: Maybe<Scalars['Int']>,
  costInCredits_in?: Maybe<Array<Scalars['Int']>>,
  costInCredits_not_in?: Maybe<Array<Scalars['Int']>>,
  costInCredits_lt?: Maybe<Scalars['Int']>,
  costInCredits_lte?: Maybe<Scalars['Int']>,
  costInCredits_gt?: Maybe<Scalars['Int']>,
  costInCredits_gte?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  crew?: Maybe<Scalars['Int']>,
  crew_not?: Maybe<Scalars['Int']>,
  crew_in?: Maybe<Array<Scalars['Int']>>,
  crew_not_in?: Maybe<Array<Scalars['Int']>>,
  crew_lt?: Maybe<Scalars['Int']>,
  crew_lte?: Maybe<Scalars['Int']>,
  crew_gt?: Maybe<Scalars['Int']>,
  crew_gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  length?: Maybe<Scalars['Float']>,
  length_not?: Maybe<Scalars['Float']>,
  length_in?: Maybe<Array<Scalars['Float']>>,
  length_not_in?: Maybe<Array<Scalars['Float']>>,
  length_lt?: Maybe<Scalars['Float']>,
  length_lte?: Maybe<Scalars['Float']>,
  length_gt?: Maybe<Scalars['Float']>,
  length_gte?: Maybe<Scalars['Float']>,
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_not?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_not_in?: Maybe<Array<Scalars['Int']>>,
  maxAtmospheringSpeed_lt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_lte?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gt?: Maybe<Scalars['Int']>,
  maxAtmospheringSpeed_gte?: Maybe<Scalars['Int']>,
  model?: Maybe<Scalars['String']>,
  model_not?: Maybe<Scalars['String']>,
  model_in?: Maybe<Array<Scalars['String']>>,
  model_not_in?: Maybe<Array<Scalars['String']>>,
  model_lt?: Maybe<Scalars['String']>,
  model_lte?: Maybe<Scalars['String']>,
  model_gt?: Maybe<Scalars['String']>,
  model_gte?: Maybe<Scalars['String']>,
  model_contains?: Maybe<Scalars['String']>,
  model_not_contains?: Maybe<Scalars['String']>,
  model_starts_with?: Maybe<Scalars['String']>,
  model_not_starts_with?: Maybe<Scalars['String']>,
  model_ends_with?: Maybe<Scalars['String']>,
  model_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  passengers?: Maybe<Scalars['Int']>,
  passengers_not?: Maybe<Scalars['Int']>,
  passengers_in?: Maybe<Array<Scalars['Int']>>,
  passengers_not_in?: Maybe<Array<Scalars['Int']>>,
  passengers_lt?: Maybe<Scalars['Int']>,
  passengers_lte?: Maybe<Scalars['Int']>,
  passengers_gt?: Maybe<Scalars['Int']>,
  passengers_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  films_every?: Maybe<FilmFilter>,
  films_some?: Maybe<FilmFilter>,
  films_none?: Maybe<FilmFilter>,
  pilots_every?: Maybe<PersonFilter>,
  pilots_some?: Maybe<PersonFilter>,
  pilots_none?: Maybe<PersonFilter>,
};

export type VehicleSubscriptionPayload = {
   __typename?: 'VehicleSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Vehicle>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<VehiclePreviousValues>,
};

export type AllFilmsQueryVariables = {};


export type AllFilmsQuery = (
  { __typename?: 'Query' }
  & { allFilms: Array<(
    { __typename?: 'Film' }
    & Pick<Film, 'title'>
    & { characters: Maybe<Array<(
      { __typename?: 'Person' }
      & Pick<Person, 'id' | 'name'>
    )>>, starships: Maybe<Array<(
      { __typename?: 'Starship' }
      & Pick<Starship, 'id' | 'name'>
    )>> }
  )> }
);

export type AllPersonsQueryVariables = {};


export type AllPersonsQuery = (
  { __typename?: 'Query' }
  & { allPersons: Array<(
    { __typename?: 'Person' }
    & Pick<Person, 'id' | 'name'>
    & { films: Maybe<Array<(
      { __typename?: 'Film' }
      & Pick<Film, 'id' | 'title'>
    )>> }
  )> }
);

export type AllStarshipsQueryVariables = {};


export type AllStarshipsQuery = (
  { __typename?: 'Query' }
  & { allStarships: Array<(
    { __typename?: 'Starship' }
    & Pick<Starship, 'id' | 'name'>
  )> }
);


export const AllFilmsDocument = gql`
    query AllFilms {
  allFilms {
    title
    characters {
      id
      name
    }
    starships {
      id
      name
    }
  }
}
    `;

/**
 * __useAllFilmsQuery__
 *
 * To run a query within a React component, call `useAllFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFilmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFilmsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllFilmsQuery, AllFilmsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllFilmsQuery, AllFilmsQueryVariables>(AllFilmsDocument, baseOptions);
      }
export function useAllFilmsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFilmsQuery, AllFilmsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllFilmsQuery, AllFilmsQueryVariables>(AllFilmsDocument, baseOptions);
        }
export type AllFilmsQueryHookResult = ReturnType<typeof useAllFilmsQuery>;
export type AllFilmsLazyQueryHookResult = ReturnType<typeof useAllFilmsLazyQuery>;
export type AllFilmsQueryResult = ApolloReactCommon.QueryResult<AllFilmsQuery, AllFilmsQueryVariables>;
export const AllPersonsDocument = gql`
    query AllPersons {
  allPersons {
    id
    name
    films {
      id
      title
    }
  }
}
    `;

/**
 * __useAllPersonsQuery__
 *
 * To run a query within a React component, call `useAllPersonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPersonsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPersonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPersonsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllPersonsQuery, AllPersonsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllPersonsQuery, AllPersonsQueryVariables>(AllPersonsDocument, baseOptions);
      }
export function useAllPersonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPersonsQuery, AllPersonsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllPersonsQuery, AllPersonsQueryVariables>(AllPersonsDocument, baseOptions);
        }
export type AllPersonsQueryHookResult = ReturnType<typeof useAllPersonsQuery>;
export type AllPersonsLazyQueryHookResult = ReturnType<typeof useAllPersonsLazyQuery>;
export type AllPersonsQueryResult = ApolloReactCommon.QueryResult<AllPersonsQuery, AllPersonsQueryVariables>;
export const AllStarshipsDocument = gql`
    query AllStarships {
  allStarships {
    id
    name
  }
}
    `;

/**
 * __useAllStarshipsQuery__
 *
 * To run a query within a React component, call `useAllStarshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStarshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStarshipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStarshipsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllStarshipsQuery, AllStarshipsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllStarshipsQuery, AllStarshipsQueryVariables>(AllStarshipsDocument, baseOptions);
      }
export function useAllStarshipsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllStarshipsQuery, AllStarshipsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllStarshipsQuery, AllStarshipsQueryVariables>(AllStarshipsDocument, baseOptions);
        }
export type AllStarshipsQueryHookResult = ReturnType<typeof useAllStarshipsQuery>;
export type AllStarshipsLazyQueryHookResult = ReturnType<typeof useAllStarshipsLazyQuery>;
export type AllStarshipsQueryResult = ApolloReactCommon.QueryResult<AllStarshipsQuery, AllStarshipsQueryVariables>;