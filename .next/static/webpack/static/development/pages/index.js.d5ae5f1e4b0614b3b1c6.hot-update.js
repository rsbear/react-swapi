webpackHotUpdate("static/development/pages/index.js",{

/***/ "./generated/graphql.tsx":
/*!*******************************!*\
  !*** ./generated/graphql.tsx ***!
  \*******************************/
/*! exports provided: _ModelMutationType, AssetOrderBy, FilmOrderBy, Person_Eye_Color, Person_Gender, Person_Hair_Color, Person_Skin_Color, PersonOrderBy, PlanetOrderBy, Species_Eye_Color, Species_Hair_Color, Species_Skin_Color, SpeciesOrderBy, StarshipOrderBy, VehicleOrderBy, AllFilmsDocument, useAllFilmsQuery, useAllFilmsLazyQuery, AllPersonsDocument, useAllPersonsQuery, useAllPersonsLazyQuery, AllStarshipsDocument, useAllStarshipsQuery, useAllStarshipsLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ModelMutationType", function() { return _ModelMutationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetOrderBy", function() { return AssetOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmOrderBy", function() { return FilmOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Eye_Color", function() { return Person_Eye_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Gender", function() { return Person_Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Hair_Color", function() { return Person_Hair_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person_Skin_Color", function() { return Person_Skin_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonOrderBy", function() { return PersonOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetOrderBy", function() { return PlanetOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species_Eye_Color", function() { return Species_Eye_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species_Hair_Color", function() { return Species_Hair_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species_Skin_Color", function() { return Species_Skin_Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesOrderBy", function() { return SpeciesOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipOrderBy", function() { return StarshipOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleOrderBy", function() { return VehicleOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFilmsDocument", function() { return AllFilmsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllFilmsQuery", function() { return useAllFilmsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllFilmsLazyQuery", function() { return useAllFilmsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPersonsDocument", function() { return AllPersonsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPersonsQuery", function() { return useAllPersonsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllPersonsLazyQuery", function() { return useAllPersonsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStarshipsDocument", function() { return AllStarshipsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllStarshipsQuery", function() { return useAllStarshipsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllStarshipsLazyQuery", function() { return useAllStarshipsLazyQuery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query AllStarships {\n  allStarships {\n    id\n    name\n  }\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query AllPersons {\n  allPersons {\n    id\n    name\n    films {\n      id\n      title\n    }\n  }\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query AllFilms {\n  allFilms {\n    title\n    characters(first: 5) {\n      id\n      name\n    }\n    starships(first: 5) {\n      id\n      name\n    }\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var _ModelMutationType;

(function (_ModelMutationType) {
  _ModelMutationType["Created"] = "CREATED";
  _ModelMutationType["Updated"] = "UPDATED";
  _ModelMutationType["Deleted"] = "DELETED";
})(_ModelMutationType || (_ModelMutationType = {}));

var AssetOrderBy;

(function (AssetOrderBy) {
  AssetOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  AssetOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  AssetOrderBy["FileNameAsc"] = "fileName_ASC";
  AssetOrderBy["FileNameDesc"] = "fileName_DESC";
  AssetOrderBy["HandleAsc"] = "handle_ASC";
  AssetOrderBy["HandleDesc"] = "handle_DESC";
  AssetOrderBy["HeightAsc"] = "height_ASC";
  AssetOrderBy["HeightDesc"] = "height_DESC";
  AssetOrderBy["IdAsc"] = "id_ASC";
  AssetOrderBy["IdDesc"] = "id_DESC";
  AssetOrderBy["MimeTypeAsc"] = "mimeType_ASC";
  AssetOrderBy["MimeTypeDesc"] = "mimeType_DESC";
  AssetOrderBy["SizeAsc"] = "size_ASC";
  AssetOrderBy["SizeDesc"] = "size_DESC";
  AssetOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  AssetOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
  AssetOrderBy["UrlAsc"] = "url_ASC";
  AssetOrderBy["UrlDesc"] = "url_DESC";
  AssetOrderBy["WidthAsc"] = "width_ASC";
  AssetOrderBy["WidthDesc"] = "width_DESC";
})(AssetOrderBy || (AssetOrderBy = {}));

var FilmOrderBy;

(function (FilmOrderBy) {
  FilmOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  FilmOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  FilmOrderBy["DirectorAsc"] = "director_ASC";
  FilmOrderBy["DirectorDesc"] = "director_DESC";
  FilmOrderBy["EpisodeIdAsc"] = "episodeId_ASC";
  FilmOrderBy["EpisodeIdDesc"] = "episodeId_DESC";
  FilmOrderBy["IdAsc"] = "id_ASC";
  FilmOrderBy["IdDesc"] = "id_DESC";
  FilmOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  FilmOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  FilmOrderBy["OpeningCrawlAsc"] = "openingCrawl_ASC";
  FilmOrderBy["OpeningCrawlDesc"] = "openingCrawl_DESC";
  FilmOrderBy["ReleaseDateAsc"] = "releaseDate_ASC";
  FilmOrderBy["ReleaseDateDesc"] = "releaseDate_DESC";
  FilmOrderBy["TitleAsc"] = "title_ASC";
  FilmOrderBy["TitleDesc"] = "title_DESC";
  FilmOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  FilmOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(FilmOrderBy || (FilmOrderBy = {}));

var Person_Eye_Color;

(function (Person_Eye_Color) {
  Person_Eye_Color["Unknown"] = "UNKNOWN";
  Person_Eye_Color["Blue"] = "BLUE";
  Person_Eye_Color["Yellow"] = "YELLOW";
  Person_Eye_Color["Red"] = "RED";
  Person_Eye_Color["Brown"] = "BROWN";
  Person_Eye_Color["Bluegrey"] = "BLUEGREY";
  Person_Eye_Color["Black"] = "BLACK";
  Person_Eye_Color["Orange"] = "ORANGE";
  Person_Eye_Color["Hazel"] = "HAZEL";
  Person_Eye_Color["Pink"] = "PINK";
  Person_Eye_Color["Gold"] = "GOLD";
  Person_Eye_Color["Green"] = "GREEN";
  Person_Eye_Color["White"] = "WHITE";
  Person_Eye_Color["Dark"] = "DARK";
})(Person_Eye_Color || (Person_Eye_Color = {}));

var Person_Gender;

(function (Person_Gender) {
  Person_Gender["Unknown"] = "UNKNOWN";
  Person_Gender["Male"] = "MALE";
  Person_Gender["Female"] = "FEMALE";
  Person_Gender["Hermaphrodite"] = "HERMAPHRODITE";
})(Person_Gender || (Person_Gender = {}));

var Person_Hair_Color;

(function (Person_Hair_Color) {
  Person_Hair_Color["Auburn"] = "AUBURN";
  Person_Hair_Color["Black"] = "BLACK";
  Person_Hair_Color["Blonde"] = "BLONDE";
  Person_Hair_Color["Brown"] = "BROWN";
  Person_Hair_Color["Grey"] = "GREY";
  Person_Hair_Color["Unknown"] = "UNKNOWN";
  Person_Hair_Color["White"] = "WHITE";
})(Person_Hair_Color || (Person_Hair_Color = {}));

var Person_Skin_Color;

(function (Person_Skin_Color) {
  Person_Skin_Color["Unknown"] = "UNKNOWN";
  Person_Skin_Color["Fair"] = "FAIR";
  Person_Skin_Color["Gold"] = "GOLD";
  Person_Skin_Color["White"] = "WHITE";
  Person_Skin_Color["Light"] = "LIGHT";
  Person_Skin_Color["Green"] = "GREEN";
  Person_Skin_Color["Greentan"] = "GREENTAN";
  Person_Skin_Color["Pale"] = "PALE";
  Person_Skin_Color["Metal"] = "METAL";
  Person_Skin_Color["Dark"] = "DARK";
  Person_Skin_Color["Brownmottle"] = "BROWNMOTTLE";
  Person_Skin_Color["Brown"] = "BROWN";
  Person_Skin_Color["Grey"] = "GREY";
  Person_Skin_Color["Mottledgreen"] = "MOTTLEDGREEN";
  Person_Skin_Color["Orange"] = "ORANGE";
  Person_Skin_Color["Blue"] = "BLUE";
  Person_Skin_Color["Red"] = "RED";
  Person_Skin_Color["Yellow"] = "YELLOW";
  Person_Skin_Color["Tan"] = "TAN";
  Person_Skin_Color["Silver"] = "SILVER";
})(Person_Skin_Color || (Person_Skin_Color = {}));

var PersonOrderBy;

(function (PersonOrderBy) {
  PersonOrderBy["BirthYearAsc"] = "birthYear_ASC";
  PersonOrderBy["BirthYearDesc"] = "birthYear_DESC";
  PersonOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  PersonOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  PersonOrderBy["GenderAsc"] = "gender_ASC";
  PersonOrderBy["GenderDesc"] = "gender_DESC";
  PersonOrderBy["HeightAsc"] = "height_ASC";
  PersonOrderBy["HeightDesc"] = "height_DESC";
  PersonOrderBy["IdAsc"] = "id_ASC";
  PersonOrderBy["IdDesc"] = "id_DESC";
  PersonOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  PersonOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  PersonOrderBy["MassAsc"] = "mass_ASC";
  PersonOrderBy["MassDesc"] = "mass_DESC";
  PersonOrderBy["NameAsc"] = "name_ASC";
  PersonOrderBy["NameDesc"] = "name_DESC";
  PersonOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  PersonOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(PersonOrderBy || (PersonOrderBy = {}));

var PlanetOrderBy;

(function (PlanetOrderBy) {
  PlanetOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  PlanetOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  PlanetOrderBy["DiameterAsc"] = "diameter_ASC";
  PlanetOrderBy["DiameterDesc"] = "diameter_DESC";
  PlanetOrderBy["GravityAsc"] = "gravity_ASC";
  PlanetOrderBy["GravityDesc"] = "gravity_DESC";
  PlanetOrderBy["IdAsc"] = "id_ASC";
  PlanetOrderBy["IdDesc"] = "id_DESC";
  PlanetOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  PlanetOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  PlanetOrderBy["NameAsc"] = "name_ASC";
  PlanetOrderBy["NameDesc"] = "name_DESC";
  PlanetOrderBy["OrbitalPeriodAsc"] = "orbitalPeriod_ASC";
  PlanetOrderBy["OrbitalPeriodDesc"] = "orbitalPeriod_DESC";
  PlanetOrderBy["PopulationAsc"] = "population_ASC";
  PlanetOrderBy["PopulationDesc"] = "population_DESC";
  PlanetOrderBy["RotationPeriodAsc"] = "rotationPeriod_ASC";
  PlanetOrderBy["RotationPeriodDesc"] = "rotationPeriod_DESC";
  PlanetOrderBy["SurfaceWaterAsc"] = "surfaceWater_ASC";
  PlanetOrderBy["SurfaceWaterDesc"] = "surfaceWater_DESC";
  PlanetOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  PlanetOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(PlanetOrderBy || (PlanetOrderBy = {}));

var Species_Eye_Color;

(function (Species_Eye_Color) {
  Species_Eye_Color["Amber"] = "AMBER";
  Species_Eye_Color["Black"] = "BLACK";
  Species_Eye_Color["Blue"] = "BLUE";
  Species_Eye_Color["Brown"] = "BROWN";
  Species_Eye_Color["Gold"] = "GOLD";
  Species_Eye_Color["Green"] = "GREEN";
  Species_Eye_Color["Grey"] = "GREY";
  Species_Eye_Color["Hazel"] = "HAZEL";
  Species_Eye_Color["Indigo"] = "INDIGO";
  Species_Eye_Color["Orange"] = "ORANGE";
  Species_Eye_Color["Pink"] = "PINK";
  Species_Eye_Color["Red"] = "RED";
  Species_Eye_Color["Silver"] = "SILVER";
  Species_Eye_Color["Unknown"] = "UNKNOWN";
  Species_Eye_Color["Yellow"] = "YELLOW";
  Species_Eye_Color["Golden"] = "GOLDEN";
})(Species_Eye_Color || (Species_Eye_Color = {}));

var Species_Hair_Color;

(function (Species_Hair_Color) {
  Species_Hair_Color["Unknown"] = "UNKNOWN";
  Species_Hair_Color["Brown"] = "BROWN";
  Species_Hair_Color["White"] = "WHITE";
  Species_Hair_Color["Red"] = "RED";
  Species_Hair_Color["Black"] = "BLACK";
  Species_Hair_Color["Blonde"] = "BLONDE";
})(Species_Hair_Color || (Species_Hair_Color = {}));

var Species_Skin_Color;

(function (Species_Skin_Color) {
  Species_Skin_Color["Blue"] = "BLUE";
  Species_Skin_Color["Brown"] = "BROWN";
  Species_Skin_Color["Caucasian"] = "CAUCASIAN";
  Species_Skin_Color["Dark"] = "DARK";
  Species_Skin_Color["Green"] = "GREEN";
  Species_Skin_Color["Grey"] = "GREY";
  Species_Skin_Color["Magenta"] = "MAGENTA";
  Species_Skin_Color["Orange"] = "ORANGE";
  Species_Skin_Color["Pale"] = "PALE";
  Species_Skin_Color["Palepink"] = "PALEPINK";
  Species_Skin_Color["Peach"] = "PEACH";
  Species_Skin_Color["Pink"] = "PINK";
  Species_Skin_Color["Purple"] = "PURPLE";
  Species_Skin_Color["Red"] = "RED";
  Species_Skin_Color["Tan"] = "TAN";
  Species_Skin_Color["Unknown"] = "UNKNOWN";
  Species_Skin_Color["White"] = "WHITE";
  Species_Skin_Color["Yellow"] = "YELLOW";
  Species_Skin_Color["Black"] = "BLACK";
  Species_Skin_Color["Asian"] = "ASIAN";
  Species_Skin_Color["Hispanic"] = "HISPANIC";
})(Species_Skin_Color || (Species_Skin_Color = {}));

var SpeciesOrderBy;

(function (SpeciesOrderBy) {
  SpeciesOrderBy["AverageHeightAsc"] = "averageHeight_ASC";
  SpeciesOrderBy["AverageHeightDesc"] = "averageHeight_DESC";
  SpeciesOrderBy["AverageLifespanAsc"] = "averageLifespan_ASC";
  SpeciesOrderBy["AverageLifespanDesc"] = "averageLifespan_DESC";
  SpeciesOrderBy["ClassificationAsc"] = "classification_ASC";
  SpeciesOrderBy["ClassificationDesc"] = "classification_DESC";
  SpeciesOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  SpeciesOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  SpeciesOrderBy["DesignationAsc"] = "designation_ASC";
  SpeciesOrderBy["DesignationDesc"] = "designation_DESC";
  SpeciesOrderBy["IdAsc"] = "id_ASC";
  SpeciesOrderBy["IdDesc"] = "id_DESC";
  SpeciesOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  SpeciesOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  SpeciesOrderBy["LanguageAsc"] = "language_ASC";
  SpeciesOrderBy["LanguageDesc"] = "language_DESC";
  SpeciesOrderBy["NameAsc"] = "name_ASC";
  SpeciesOrderBy["NameDesc"] = "name_DESC";
  SpeciesOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  SpeciesOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(SpeciesOrderBy || (SpeciesOrderBy = {}));

var StarshipOrderBy;

(function (StarshipOrderBy) {
  StarshipOrderBy["CargoCapacityAsc"] = "cargoCapacity_ASC";
  StarshipOrderBy["CargoCapacityDesc"] = "cargoCapacity_DESC";
  StarshipOrderBy["ClassAsc"] = "class_ASC";
  StarshipOrderBy["ClassDesc"] = "class_DESC";
  StarshipOrderBy["ConsumablesAsc"] = "consumables_ASC";
  StarshipOrderBy["ConsumablesDesc"] = "consumables_DESC";
  StarshipOrderBy["CostInCreditsAsc"] = "costInCredits_ASC";
  StarshipOrderBy["CostInCreditsDesc"] = "costInCredits_DESC";
  StarshipOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  StarshipOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  StarshipOrderBy["CrewAsc"] = "crew_ASC";
  StarshipOrderBy["CrewDesc"] = "crew_DESC";
  StarshipOrderBy["HyperdriveRatingAsc"] = "hyperdriveRating_ASC";
  StarshipOrderBy["HyperdriveRatingDesc"] = "hyperdriveRating_DESC";
  StarshipOrderBy["IdAsc"] = "id_ASC";
  StarshipOrderBy["IdDesc"] = "id_DESC";
  StarshipOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  StarshipOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  StarshipOrderBy["LengthAsc"] = "length_ASC";
  StarshipOrderBy["LengthDesc"] = "length_DESC";
  StarshipOrderBy["MaxAtmospheringSpeedAsc"] = "maxAtmospheringSpeed_ASC";
  StarshipOrderBy["MaxAtmospheringSpeedDesc"] = "maxAtmospheringSpeed_DESC";
  StarshipOrderBy["MgltAsc"] = "mglt_ASC";
  StarshipOrderBy["MgltDesc"] = "mglt_DESC";
  StarshipOrderBy["NameAsc"] = "name_ASC";
  StarshipOrderBy["NameDesc"] = "name_DESC";
  StarshipOrderBy["PassengersAsc"] = "passengers_ASC";
  StarshipOrderBy["PassengersDesc"] = "passengers_DESC";
  StarshipOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  StarshipOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(StarshipOrderBy || (StarshipOrderBy = {}));

var VehicleOrderBy;

(function (VehicleOrderBy) {
  VehicleOrderBy["CargoCapacityAsc"] = "cargoCapacity_ASC";
  VehicleOrderBy["CargoCapacityDesc"] = "cargoCapacity_DESC";
  VehicleOrderBy["ClassAsc"] = "class_ASC";
  VehicleOrderBy["ClassDesc"] = "class_DESC";
  VehicleOrderBy["ConsumablesAsc"] = "consumables_ASC";
  VehicleOrderBy["ConsumablesDesc"] = "consumables_DESC";
  VehicleOrderBy["CostInCreditsAsc"] = "costInCredits_ASC";
  VehicleOrderBy["CostInCreditsDesc"] = "costInCredits_DESC";
  VehicleOrderBy["CreatedAtAsc"] = "createdAt_ASC";
  VehicleOrderBy["CreatedAtDesc"] = "createdAt_DESC";
  VehicleOrderBy["CrewAsc"] = "crew_ASC";
  VehicleOrderBy["CrewDesc"] = "crew_DESC";
  VehicleOrderBy["IdAsc"] = "id_ASC";
  VehicleOrderBy["IdDesc"] = "id_DESC";
  VehicleOrderBy["IsPublishedAsc"] = "isPublished_ASC";
  VehicleOrderBy["IsPublishedDesc"] = "isPublished_DESC";
  VehicleOrderBy["LengthAsc"] = "length_ASC";
  VehicleOrderBy["LengthDesc"] = "length_DESC";
  VehicleOrderBy["MaxAtmospheringSpeedAsc"] = "maxAtmospheringSpeed_ASC";
  VehicleOrderBy["MaxAtmospheringSpeedDesc"] = "maxAtmospheringSpeed_DESC";
  VehicleOrderBy["ModelAsc"] = "model_ASC";
  VehicleOrderBy["ModelDesc"] = "model_DESC";
  VehicleOrderBy["NameAsc"] = "name_ASC";
  VehicleOrderBy["NameDesc"] = "name_DESC";
  VehicleOrderBy["PassengersAsc"] = "passengers_ASC";
  VehicleOrderBy["PassengersDesc"] = "passengers_DESC";
  VehicleOrderBy["UpdatedAtAsc"] = "updatedAt_ASC";
  VehicleOrderBy["UpdatedAtDesc"] = "updatedAt_DESC";
})(VehicleOrderBy || (VehicleOrderBy = {}));

var AllFilmsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
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

function useAllFilmsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"](AllFilmsDocument, baseOptions);
}
function useAllFilmsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"](AllFilmsDocument, baseOptions);
}
var AllPersonsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
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

function useAllPersonsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"](AllPersonsDocument, baseOptions);
}
function useAllPersonsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"](AllPersonsDocument, baseOptions);
}
var AllStarshipsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
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

function useAllStarshipsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"](AllStarshipsDocument, baseOptions);
}
function useAllStarshipsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"](AllStarshipsDocument, baseOptions);
}

/***/ }),

/***/ "./hooks/useTypeFilter.ts":
/*!********************************!*\
  !*** ./hooks/useTypeFilter.ts ***!
  \********************************/
/*! exports provided: useTypeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypeFilter", function() { return useTypeFilter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



var initState = {
  isLoading: true,
  browseType: "films",
  mainList: []
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "setLoading":
      return _objectSpread({}, state, {
        isLoading: true
      });

    case "setBrowse":
      return _objectSpread({}, state, {
        browseType: action.payload
      });

    case "setMainList":
      return _objectSpread({}, state, {
        mainList: action.payload,
        isLoading: false
      });

    default:
      return [];
  }
};

var useTypeFilter = function useTypeFilter() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(reducer, initState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var films = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useAllFilmsQuery"])();
  var persons = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useAllPersonsQuery"])();
  var starships = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useAllStarshipsQuery"])();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {}, [state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (state.browseType === "films") {
      if (films.loading) {
        dispatch({
          type: "setLoading"
        });
      } else if (!films.error && films.data) {
        dispatch({
          type: "setMainList",
          payload: films.data.allFilms
        });
      }
    }
  }, [films, state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (state.browseType === "persons") {
      if (persons.loading) {
        dispatch({
          type: "setLoading"
        });
      } else if (!persons.error && persons.data) {
        dispatch({
          type: "setMainList",
          payload: persons.data.allPersons
        });
      }
    }
  }, [persons, state.browseType]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (state.browseType === "starships") {
      if (starships.loading) {
        dispatch({
          type: "setLoading"
        });
      } else if (!starships.error && starships.data) {
        dispatch({
          type: "setMainList",
          payload: starships.data.allStarships
        });
      }
    }
  }, [starships, state.browseType]);
  return [state, dispatch];
};

/***/ })

})
//# sourceMappingURL=index.js.d5ae5f1e4b0614b3b1c6.hot-update.js.map