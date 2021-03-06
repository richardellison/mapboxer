% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/fit-bounds.R
\name{fit_bounds}
\alias{fit_bounds}
\title{Fit the map to a bounding box}
\usage{
fit_bounds(map, bounds, ...)
}
\arguments{
\item{map}{A \link{mapboxer} object.}

\item{bounds}{The bounding box as a vector in [west, south, east, north] order
or a \code{bbox} object.}

\item{...}{Optional arguments, see \url{https://docs.mapbox.com/mapbox-gl-js/api/map/#map#fitbounds}.}
}
\description{
Fit the map to a bounding box
}
