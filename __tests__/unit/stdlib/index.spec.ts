import { createLibrary } from '../../../src/stdlib';
import { Canvas } from '../../../src/renderer';
import {
  Cartesian,
  Polar,
  Transpose,
  Parallel,
  Fisheye,
} from '../../../src/coordinate';
import { Constant, Field, Transform, Column } from '../../../src/encode';
import {
  Interval,
  Line,
  Point as PointGeometry,
  Text as TextGeometry,
  Grid,
  Area as AreaGeometry,
  Edge as EdgeGeometry,
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Schema as SchemaGeometry,
} from '../../../src/mark/geometry';
import {
  AnnotationConnector,
  AnnotationLineX,
  AnnotationLineY,
  AnnotationText,
} from '../../../src/mark/annotation';
import { Category10, Category20 } from '../../../src/palette';
import {
  Linear,
  Ordinal,
  Band,
  Identity,
  Point,
  Time,
  Log,
  Pow,
  Threshold,
  Quantile,
  Quantize,
} from '../../../src/scale';
import {
  Rect as RectShape,
  HollowRect,
  Line as LineShape,
  Smooth,
  HV,
  VH,
  HVH,
  Bowtie,
  Cross,
  Diamond,
  Hexagon,
  HollowBowtie,
  HollowDiamond,
  HollowHexagon,
  HollowPoint,
  HollowSquare,
  HollowTriangle,
  HollowTriangleDown,
  Hyphen,
  LinePoint,
  Plus,
  Point as PointShape,
  Square,
  Tick,
  Triangle,
  TriangleDown,
  Text,
  AnnotationText as AnnotationTextShape,
  AnnotationBadge,
  AnnotationConnector as AnnotationConnectorShape,
  Area,
  SmoothArea,
  Edge,
  Arc as ArcEdge,
  Image,
  Polygon,
  Box,
  AnnotationLine as AnnotationLineShape,
} from '../../../src/shape';
import { Light } from '../../../src/theme';
import {
  AxisX,
  AxisY,
  LegendCategory,
  LegendContinuous,
} from '../../../src/component';
import { ScaleInY, FadeIn } from '../../../src/animation';
import {
  ElementActive,
  Tooltip,
  Fisheye as FisheyeInteraction,
} from '../../../src/interaction';
import {
  SurfacePointSelection,
  HighlightSelection,
  Tooltip as TooltipAction,
  FisheyeFocus,
  Plot,
} from '../../../src/action';
import { MousePosition, TouchPosition } from '../../../src/interactor';
import { Layer, Flex, Mark, View, Rect } from '../../../src/composition';
import { Pack } from '../../../src/adjust';
import {
  MaybeTitleX,
  MaybeTooltipY,
  MaybeZeroX,
  MaybeZeroY1,
  MaybeStackY,
  MaybeSeries,
  MaybeTooltipPosition,
  MaybeArrayField,
  MaybeZeroY,
  MaybeSize,
  MaybeKey,
  StackY,
  DodgeX,
  StackEnter,
  Fetch,
  SortBy,
  FilterBy,
  Pick,
  Rename,
  Subset,
  WordCloud,
  Voronoi,
  Sankey,
} from '../../../src/transform';

describe('stdlib', () => {
  it('createLibrary() should returns expected builtin', () => {
    expect(createLibrary()).toEqual({
      'transform.fetch': Fetch,
      'transform.sortBy': SortBy,
      'transform.filterBy': FilterBy,
      'transform.pick': Pick,
      'transform.rename': Rename,
      'transform.subset': Subset,
      'transform.wordCloud': WordCloud,
      'transform.voronoi': Voronoi,
      'transform.Sankey': Sankey,
      'transform.maybeZeroY1': MaybeZeroY1,
      'transform.maybeZeroX': MaybeZeroX,
      'transform.maybeStackY': MaybeStackY,
      'transform.maybeTitleX': MaybeTitleX,
      'transform.maybeTooltipY': MaybeTooltipY,
      'transform.maybeTooltipPosition': MaybeTooltipPosition,
      'transform.maybeArrayField': MaybeArrayField,
      'transform.maybeSeries': MaybeSeries,
      'transform.stackY': StackY,
      'transform.dodgeX': DodgeX,
      'transform.stackEnter': StackEnter,
      'transform.maybeSize': MaybeSize,
      'transform.maybeZeroY': MaybeZeroY,
      'transform.maybeKey': MaybeKey,
      'renderer.canvas': Canvas,
      'coordinate.cartesian': Cartesian,
      'coordinate.polar': Polar,
      'coordinate.transpose': Transpose,
      'coordinate.parallel': Parallel,
      'coordinate.fisheye': Fisheye,
      'encode.constant': Constant,
      'encode.field': Field,
      'encode.transform': Transform,
      'encode.column': Column,
      'mark.interval': Interval,
      'mark.line': Line,
      'mark.point': PointGeometry,
      'mark.text': TextGeometry,
      'mark.grid': Grid,
      'mark.area': AreaGeometry,
      'mark.edge': EdgeGeometry,
      'mark.image': ImageGeometry,
      'mark.polygon': PolygonGeometry,
      'mark.schema': SchemaGeometry,
      'mark.annotation.text': AnnotationText,
      'mark.annotation.lineX': AnnotationLineX,
      'mark.annotation.lineY': AnnotationLineY,
      'mark.annotation.connector': AnnotationConnector,
      'palette.category10': Category10,
      'palette.category20': Category20,
      'scale.linear': Linear,
      'scale.ordinal': Ordinal,
      'scale.band': Band,
      'scale.identity': Identity,
      'scale.point': Point,
      'scale.time': Time,
      'scale.log': Log,
      'scale.pow': Pow,
      'scale.threshold': Threshold,
      'scale.quantile': Quantile,
      'scale.quantize': Quantize,
      'shape.rect': RectShape,
      'shape.hollowRect': HollowRect,
      'shape.line': LineShape,
      'shape.hv': HV,
      'shape.vh': VH,
      'shape.hvh': HVH,
      'shape.smooth': Smooth,
      'shape.bowtie': Bowtie,
      'shape.cross': Cross,
      'shape.diamond': Diamond,
      'shape.hexagon': Hexagon,
      'shape.hollowBowtie': HollowBowtie,
      'shape.hollowDiamond': HollowDiamond,
      'shape.hollowHexagon': HollowHexagon,
      'shape.hollowPoint': HollowPoint,
      'shape.hollowSquare': HollowSquare,
      'shape.hollowTriangle': HollowTriangle,
      'shape.hollowTriangleDown': HollowTriangleDown,
      'shape.hyphen': Hyphen,
      'shape.linePoint': LinePoint,
      'shape.plus': Plus,
      'shape.point': PointShape,
      'shape.square': Square,
      'shape.tick': Tick,
      'shape.triangle': Triangle,
      'shape.triangleDown': TriangleDown,
      'shape.text': Text,
      'shape.area': Area,
      'shape.smoothArea': SmoothArea,
      'shape.edge': Edge,
      'shape.arc': ArcEdge,
      'shape.image': Image,
      'shape.polygon': Polygon,
      'shape.box': Box,
      'shape.annotation.text': AnnotationTextShape,
      'shape.annotation.badge': AnnotationBadge,
      'shape.annotation.line': AnnotationLineShape,
      'shape.annotation.connector': AnnotationConnectorShape,
      'theme.light': Light,
      'component.axisX': AxisX,
      'component.axisY': AxisY,
      'component.legendCategory': LegendCategory,
      'component.legendContinuous': LegendContinuous,
      'animation.scaleInY': ScaleInY,
      'animation.fadeIn': FadeIn,
      'interaction.elementActive': ElementActive,
      'interaction.tooltip': Tooltip,
      'interaction.fisheye': FisheyeInteraction,
      'action.surfacePointSelection': SurfacePointSelection,
      'action.highlightSelection': HighlightSelection,
      'action.tooltip': TooltipAction,
      'action.fisheyeFocus': FisheyeFocus,
      'action.plot': Plot,
      'interactor.mousePosition': MousePosition,
      'interactor.touchPosition': TouchPosition,
      'composition.layer': Layer,
      'composition.flex': Flex,
      'composition.mark': Mark,
      'composition.view': View,
      'composition.rect': Rect,
      'adjust.pack': Pack,
    });
  });
});
