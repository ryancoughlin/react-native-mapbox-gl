/* eslint-disable */
// DO NOT MODIFY
// THIS FILE IS AUTOGENERATED

import PropTypes from 'prop-types';

export const StyleTypes = {
  Constant: 'constant',
  Color: 'color',
  Transition: 'transition',
  Translation: 'translation',
  Function: 'function',
  Image: 'image',
};

export const StyleFunctionTypes = {
  Camera: 'camera',
  Source: 'source',
  Composite: 'composite',
};

export const StyleFunctionPropType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  payload: PropTypes.shape({
    fn: PropTypes.string,
    attributeName: PropTypes.string,
    stops: PropTypes.object,
    mode: PropTypes.any,
  }).isRequired,
});

export const TransitionPropType = PropTypes.shape({
  duration: PropTypes.number,
  delay: PropTypes.number,
});

export const TranslationPropType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

export const FillLayerStyleProp = PropTypes.shape({

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * Whether or not the fill should be antialiased.
   */
  fillAntialias: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The opacity of the entire fill layer. In contrast to the `fill-color`, this value will also affect the 1px stroke around the fill, if the stroke is used.
   */
  fillOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillOpacity property.
   */
  fillOpacityTransition: TransitionPropType,

  /**
   * The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.
   *
   * @disabledBy fill-pattern
   */
  fillColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillColor property.
   */
  fillColorTransition: TransitionPropType,

  /**
   * The outline color of the fill. Matches the value of `fill-color` if unspecified.
   *
   * @disabledBy fill-pattern
   */
  fillOutlineColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillOutlineColor property.
   */
  fillOutlineColorTransition: TransitionPropType,

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  fillTranslate: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillTranslate property.
   */
  fillTranslateTransition: TransitionPropType,

  /**
   * Controls the translation reference point.
   *
   * @requires fill-translate
   */
  fillTranslateAnchor: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512).
   */
  fillPattern: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillPattern property.
   */
  fillPatternTransition: TransitionPropType,
});

export const LineLayerStyleProp = PropTypes.shape({

  /**
   * The display of line endings.
   */
  lineCap: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * The display of lines when joining.
   */
  lineJoin: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Used to automatically convert miter joins to bevel joins for sharp angles.
   */
  lineMiterLimit: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Used to automatically convert round joins to miter joins for shallow angles.
   */
  lineRoundLimit: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * The opacity at which the line will be drawn.
   */
  lineOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineOpacity property.
   */
  lineOpacityTransition: TransitionPropType,

  /**
   * The color with which the line will be drawn.
   *
   * @disabledBy line-pattern
   */
  lineColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineColor property.
   */
  lineColorTransition: TransitionPropType,

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  lineTranslate: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineTranslate property.
   */
  lineTranslateTransition: TransitionPropType,

  /**
   * Controls the translation reference point.
   *
   * @requires line-translate
   */
  lineTranslateAnchor: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * Stroke thickness.
   */
  lineWidth: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineWidth property.
   */
  lineWidthTransition: TransitionPropType,

  /**
   * Draws a line casing outside of a line's actual path. Value indicates the width of the inner gap.
   */
  lineGapWidth: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineGapWidth property.
   */
  lineGapWidthTransition: TransitionPropType,

  /**
   * The line's offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.
   */
  lineOffset: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineOffset property.
   */
  lineOffsetTransition: TransitionPropType,

  /**
   * Blur applied to the line, in pixels.
   */
  lineBlur: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineBlur property.
   */
  lineBlurTransition: TransitionPropType,

  /**
   * Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width.
   *
   * @disabledBy line-pattern
   */
  lineDasharray: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s lineDasharray property.
   */
  lineDasharrayTransition: TransitionPropType,

  /**
   * Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512).
   */
  linePattern: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s linePattern property.
   */
  linePatternTransition: TransitionPropType,
});

export const SymbolLayerStyleProp = PropTypes.shape({

  /**
   * Label placement relative to its geometry.
   */
  symbolPlacement: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Distance between two symbol anchors.
   */
  symbolSpacing: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don't have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer.
   */
  symbolAvoidEdges: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * If true, the icon will be visible even if it collides with other previously drawn symbols.
   *
   * @requires icon-image
   */
  iconAllowOverlap: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * If true, other symbols can be visible even if they collide with the icon.
   *
   * @requires icon-image
   */
  iconIgnorePlacement: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.
   *
   * @requires icon-image, text-field
   */
  iconOptional: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * In combination with `symbol-placement`, determines the rotation behavior of icons.
   *
   * @requires icon-image
   */
  iconRotationAlignment: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `icon-size`. 1 is the original size; 3 triples the size of the image.
   *
   * @requires icon-image
   */
  iconSize: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Scales the icon to fit around the associated text.
   *
   * @requires icon-image, text-field
   */
  iconTextFit: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Size of the additional area added to dimensions determined by `icon-text-fit`, in clockwise order: top, right, bottom, left.
   *
   * @requires icon-image, text-field
   */
  iconTextFitPadding: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    StyleFunctionPropType
  ]),

  /**
   * Name of image in sprite to use for drawing an image background. A string with {tokens} replaced, referencing the data property to pull from.
   */
  iconImage: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * Rotates the icon clockwise.
   *
   * @requires icon-image
   */
  iconRotate: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Size of the additional area around the icon bounding box used for detecting symbol collisions.
   *
   * @requires icon-image
   */
  iconPadding: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * If true, the icon may be flipped to prevent it from being rendered upside-down.
   *
   * @requires icon-image
   */
  iconKeepUpright: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. When combined with `icon-rotate` the offset will be as if the rotated direction was up.
   *
   * @requires icon-image
   */
  iconOffset: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    StyleFunctionPropType
  ]),

  /**
   * Orientation of text when map is pitched.
   *
   * @requires text-field
   */
  textPitchAlignment: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * In combination with `symbol-placement`, determines the rotation behavior of the individual glyphs forming the text.
   *
   * @requires text-field
   */
  textRotationAlignment: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Value to use for a text label. Feature properties are specified using tokens like {field_name}.  (Token replacement is only supported for literal `text-field` values--not for property functions.)
   */
  textField: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * Font stack to use for displaying text.
   *
   * @requires text-field
   */
  textFont: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array
  ]),

  /**
   * Font size.
   *
   * @requires text-field
   */
  textSize: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The maximum line width for text wrapping.
   *
   * @requires text-field
   */
  textMaxWidth: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Text leading value for multi-line text.
   *
   * @requires text-field
   */
  textLineHeight: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Text tracking amount.
   *
   * @requires text-field
   */
  textLetterSpacing: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Text justification options.
   *
   * @requires text-field
   */
  textJustify: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Part of the text placed closest to the anchor.
   *
   * @requires text-field
   */
  textAnchor: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Maximum angle change between adjacent characters.
   *
   * @requires text-field
   */
  textMaxAngle: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Rotates the text clockwise.
   *
   * @requires text-field
   */
  textRotate: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * Size of the additional area around the text bounding box used for detecting symbol collisions.
   *
   * @requires text-field
   */
  textPadding: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * If true, the text may be flipped vertically to prevent it from being rendered upside-down.
   *
   * @requires text-field
   */
  textKeepUpright: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * Specifies how to capitalize text, similar to the CSS `text-transform` property.
   *
   * @requires text-field
   */
  textTransform: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires text-field
   */
  textOffset: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    StyleFunctionPropType
  ]),

  /**
   * If true, the text will be visible even if it collides with other previously drawn symbols.
   *
   * @requires text-field
   */
  textAllowOverlap: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * If true, other symbols can be visible even if they collide with the text.
   *
   * @requires text-field
   */
  textIgnorePlacement: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.
   *
   * @requires text-field, icon-image
   */
  textOptional: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * The opacity at which the icon will be drawn.
   *
   * @requires icon-image
   */
  iconOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s iconOpacity property.
   */
  iconOpacityTransition: TransitionPropType,

  /**
   * The color of the icon. This can only be used with sdf icons.
   *
   * @requires icon-image
   */
  iconColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s iconColor property.
   */
  iconColorTransition: TransitionPropType,

  /**
   * The color of the icon's halo. Icon halos can only be used with SDF icons.
   *
   * @requires icon-image
   */
  iconHaloColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s iconHaloColor property.
   */
  iconHaloColorTransition: TransitionPropType,

  /**
   * Distance of halo to the icon outline.
   *
   * @requires icon-image
   */
  iconHaloWidth: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s iconHaloWidth property.
   */
  iconHaloWidthTransition: TransitionPropType,

  /**
   * Fade out the halo towards the outside.
   *
   * @requires icon-image
   */
  iconHaloBlur: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s iconHaloBlur property.
   */
  iconHaloBlurTransition: TransitionPropType,

  /**
   * Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires icon-image
   */
  iconTranslate: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s iconTranslate property.
   */
  iconTranslateTransition: TransitionPropType,

  /**
   * Controls the translation reference point.
   *
   * @requires icon-image, icon-translate
   */
  iconTranslateAnchor: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The opacity at which the text will be drawn.
   *
   * @requires text-field
   */
  textOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s textOpacity property.
   */
  textOpacityTransition: TransitionPropType,

  /**
   * The color with which the text will be drawn.
   *
   * @requires text-field
   */
  textColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s textColor property.
   */
  textColorTransition: TransitionPropType,

  /**
   * The color of the text's halo, which helps it stand out from backgrounds.
   *
   * @requires text-field
   */
  textHaloColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s textHaloColor property.
   */
  textHaloColorTransition: TransitionPropType,

  /**
   * Distance of halo to the font outline. Max text halo width is 1/4 of the font-size.
   *
   * @requires text-field
   */
  textHaloWidth: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s textHaloWidth property.
   */
  textHaloWidthTransition: TransitionPropType,

  /**
   * The halo's fadeout distance towards the outside.
   *
   * @requires text-field
   */
  textHaloBlur: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s textHaloBlur property.
   */
  textHaloBlurTransition: TransitionPropType,

  /**
   * Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires text-field
   */
  textTranslate: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s textTranslate property.
   */
  textTranslateTransition: TransitionPropType,

  /**
   * Controls the translation reference point.
   *
   * @requires text-field, text-translate
   */
  textTranslateAnchor: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),
});

export const CircleLayerStyleProp = PropTypes.shape({

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * Circle radius.
   */
  circleRadius: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleRadius property.
   */
  circleRadiusTransition: TransitionPropType,

  /**
   * The fill color of the circle.
   */
  circleColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleColor property.
   */
  circleColorTransition: TransitionPropType,

  /**
   * Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.
   */
  circleBlur: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleBlur property.
   */
  circleBlurTransition: TransitionPropType,

  /**
   * The opacity at which the circle will be drawn.
   */
  circleOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleOpacity property.
   */
  circleOpacityTransition: TransitionPropType,

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  circleTranslate: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleTranslate property.
   */
  circleTranslateTransition: TransitionPropType,

  /**
   * Controls the translation reference point.
   *
   * @requires circle-translate
   */
  circleTranslateAnchor: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * Controls the scaling behavior of the circle when the map is pitched.
   */
  circlePitchScale: PropTypes.oneOfType([
    PropTypes.any,
    StyleFunctionPropType
  ]),

  /**
   * The width of the circle's stroke. Strokes are placed outside of the `circle-radius`.
   */
  circleStrokeWidth: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleStrokeWidth property.
   */
  circleStrokeWidthTransition: TransitionPropType,

  /**
   * The stroke color of the circle.
   */
  circleStrokeColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleStrokeColor property.
   */
  circleStrokeColorTransition: TransitionPropType,

  /**
   * The opacity of the circle's stroke.
   */
  circleStrokeOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s circleStrokeOpacity property.
   */
  circleStrokeOpacityTransition: TransitionPropType,
});

export const FillExtrusionLayerStyleProp = PropTypes.shape({

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * The opacity of the entire fill extrusion layer. This is rendered on a per-layer, not per-feature, basis, and data-driven styling is not available.
   */
  fillExtrusionOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillExtrusionOpacity property.
   */
  fillExtrusionOpacityTransition: TransitionPropType,

  /**
   * The base color of the extruded fill. The extrusion's surfaces will be shaded differently based on this color in combination with the root `light` settings. If this color is specified as `rgba` with an alpha component, the alpha component will be ignored; use `fill-extrusion-opacity` to set layer opacity.
   *
   * @disabledBy fill-extrusion-pattern
   */
  fillExtrusionColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillExtrusionColor property.
   */
  fillExtrusionColorTransition: TransitionPropType,

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.
   */
  fillExtrusionTranslate: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillExtrusionTranslate property.
   */
  fillExtrusionTranslateTransition: TransitionPropType,

  /**
   * Controls the translation reference point.
   *
   * @requires fill-extrusion-translate
   */
  fillExtrusionTranslateAnchor: PropTypes.oneOfType([
    TranslationPropType,
    StyleFunctionPropType
  ]),

  /**
   * Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512).
   */
  fillExtrusionPattern: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillExtrusionPattern property.
   */
  fillExtrusionPatternTransition: TransitionPropType,

  /**
   * The height with which to extrude this layer.
   */
  fillExtrusionHeight: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillExtrusionHeight property.
   */
  fillExtrusionHeightTransition: TransitionPropType,

  /**
   * The height with which to extrude the base of this layer. Must be less than or equal to `fill-extrusion-height`.
   *
   * @requires fill-extrusion-height
   */
  fillExtrusionBase: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s fillExtrusionBase property.
   */
  fillExtrusionBaseTransition: TransitionPropType,
});

export const RasterLayerStyleProp = PropTypes.shape({

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * The opacity at which the image will be drawn.
   */
  rasterOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterOpacity property.
   */
  rasterOpacityTransition: TransitionPropType,

  /**
   * Rotates hues around the color wheel.
   */
  rasterHueRotate: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterHueRotate property.
   */
  rasterHueRotateTransition: TransitionPropType,

  /**
   * Increase or reduce the brightness of the image. The value is the minimum brightness.
   */
  rasterBrightnessMin: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterBrightnessMin property.
   */
  rasterBrightnessMinTransition: TransitionPropType,

  /**
   * Increase or reduce the brightness of the image. The value is the maximum brightness.
   */
  rasterBrightnessMax: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterBrightnessMax property.
   */
  rasterBrightnessMaxTransition: TransitionPropType,

  /**
   * Increase or reduce the saturation of the image.
   */
  rasterSaturation: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterSaturation property.
   */
  rasterSaturationTransition: TransitionPropType,

  /**
   * Increase or reduce the contrast of the image.
   */
  rasterContrast: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterContrast property.
   */
  rasterContrastTransition: TransitionPropType,

  /**
   * Fade duration when a new tile is added.
   */
  rasterFadeDuration: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s rasterFadeDuration property.
   */
  rasterFadeDurationTransition: TransitionPropType,
});

export const BackgroundLayerStyleProp = PropTypes.shape({

  /**
   * Whether this layer is displayed.
   */
  visibility: PropTypes.any,

  /**
   * The color with which the background will be drawn.
   *
   * @disabledBy background-pattern
   */
  backgroundColor: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s backgroundColor property.
   */
  backgroundColorTransition: TransitionPropType,

  /**
   * Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512).
   */
  backgroundPattern: PropTypes.oneOfType([
    PropTypes.string,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s backgroundPattern property.
   */
  backgroundPatternTransition: TransitionPropType,

  /**
   * The opacity at which the background will be drawn.
   */
  backgroundOpacity: PropTypes.oneOfType([
    PropTypes.number,
    StyleFunctionPropType
  ]),

  /**
   * The transition affecting any changes to this layer’s backgroundOpacity property.
   */
  backgroundOpacityTransition: TransitionPropType,
});


const styleMap = {
  fillAntialias: StyleTypes.Constant,
  fillOpacity: StyleTypes.Constant,
  fillOpacityTransition: StyleTypes.Transition,
  fillColor: StyleTypes.Color,
  fillColorTransition: StyleTypes.Transition,
  fillOutlineColor: StyleTypes.Color,
  fillOutlineColorTransition: StyleTypes.Transition,
  fillTranslate: StyleTypes.Translation,
  fillTranslateTransition: StyleTypes.Transition,
  fillTranslateAnchor: StyleTypes.Translation,
  fillPattern: StyleTypes.Image,
  fillPatternTransition: StyleTypes.Transition,

  lineCap: StyleTypes.Constant,
  lineJoin: StyleTypes.Constant,
  lineMiterLimit: StyleTypes.Constant,
  lineRoundLimit: StyleTypes.Constant,
  lineOpacity: StyleTypes.Constant,
  lineOpacityTransition: StyleTypes.Transition,
  lineColor: StyleTypes.Color,
  lineColorTransition: StyleTypes.Transition,
  lineTranslate: StyleTypes.Translation,
  lineTranslateTransition: StyleTypes.Transition,
  lineTranslateAnchor: StyleTypes.Translation,
  lineWidth: StyleTypes.Constant,
  lineWidthTransition: StyleTypes.Transition,
  lineGapWidth: StyleTypes.Constant,
  lineGapWidthTransition: StyleTypes.Transition,
  lineOffset: StyleTypes.Constant,
  lineOffsetTransition: StyleTypes.Transition,
  lineBlur: StyleTypes.Constant,
  lineBlurTransition: StyleTypes.Transition,
  lineDasharray: StyleTypes.Constant,
  lineDasharrayTransition: StyleTypes.Transition,
  linePattern: StyleTypes.Image,
  linePatternTransition: StyleTypes.Transition,

  symbolPlacement: StyleTypes.Constant,
  symbolSpacing: StyleTypes.Constant,
  symbolAvoidEdges: StyleTypes.Constant,
  iconAllowOverlap: StyleTypes.Constant,
  iconIgnorePlacement: StyleTypes.Constant,
  iconOptional: StyleTypes.Constant,
  iconRotationAlignment: StyleTypes.Constant,
  iconSize: StyleTypes.Constant,
  iconTextFit: StyleTypes.Constant,
  iconTextFitPadding: StyleTypes.Constant,
  iconImage: StyleTypes.Image,
  iconRotate: StyleTypes.Constant,
  iconPadding: StyleTypes.Constant,
  iconKeepUpright: StyleTypes.Constant,
  iconOffset: StyleTypes.Constant,
  textPitchAlignment: StyleTypes.Constant,
  textRotationAlignment: StyleTypes.Constant,
  textField: StyleTypes.Constant,
  textFont: StyleTypes.Constant,
  textSize: StyleTypes.Constant,
  textMaxWidth: StyleTypes.Constant,
  textLineHeight: StyleTypes.Constant,
  textLetterSpacing: StyleTypes.Constant,
  textJustify: StyleTypes.Constant,
  textAnchor: StyleTypes.Constant,
  textMaxAngle: StyleTypes.Constant,
  textRotate: StyleTypes.Constant,
  textPadding: StyleTypes.Constant,
  textKeepUpright: StyleTypes.Constant,
  textTransform: StyleTypes.Constant,
  textOffset: StyleTypes.Constant,
  textAllowOverlap: StyleTypes.Constant,
  textIgnorePlacement: StyleTypes.Constant,
  textOptional: StyleTypes.Constant,
  iconOpacity: StyleTypes.Constant,
  iconOpacityTransition: StyleTypes.Transition,
  iconColor: StyleTypes.Color,
  iconColorTransition: StyleTypes.Transition,
  iconHaloColor: StyleTypes.Color,
  iconHaloColorTransition: StyleTypes.Transition,
  iconHaloWidth: StyleTypes.Constant,
  iconHaloWidthTransition: StyleTypes.Transition,
  iconHaloBlur: StyleTypes.Constant,
  iconHaloBlurTransition: StyleTypes.Transition,
  iconTranslate: StyleTypes.Translation,
  iconTranslateTransition: StyleTypes.Transition,
  iconTranslateAnchor: StyleTypes.Translation,
  textOpacity: StyleTypes.Constant,
  textOpacityTransition: StyleTypes.Transition,
  textColor: StyleTypes.Color,
  textColorTransition: StyleTypes.Transition,
  textHaloColor: StyleTypes.Color,
  textHaloColorTransition: StyleTypes.Transition,
  textHaloWidth: StyleTypes.Constant,
  textHaloWidthTransition: StyleTypes.Transition,
  textHaloBlur: StyleTypes.Constant,
  textHaloBlurTransition: StyleTypes.Transition,
  textTranslate: StyleTypes.Translation,
  textTranslateTransition: StyleTypes.Transition,
  textTranslateAnchor: StyleTypes.Translation,

  circleRadius: StyleTypes.Constant,
  circleRadiusTransition: StyleTypes.Transition,
  circleColor: StyleTypes.Color,
  circleColorTransition: StyleTypes.Transition,
  circleBlur: StyleTypes.Constant,
  circleBlurTransition: StyleTypes.Transition,
  circleOpacity: StyleTypes.Constant,
  circleOpacityTransition: StyleTypes.Transition,
  circleTranslate: StyleTypes.Translation,
  circleTranslateTransition: StyleTypes.Transition,
  circleTranslateAnchor: StyleTypes.Translation,
  circlePitchScale: StyleTypes.Constant,
  circleStrokeWidth: StyleTypes.Constant,
  circleStrokeWidthTransition: StyleTypes.Transition,
  circleStrokeColor: StyleTypes.Color,
  circleStrokeColorTransition: StyleTypes.Transition,
  circleStrokeOpacity: StyleTypes.Constant,
  circleStrokeOpacityTransition: StyleTypes.Transition,

  fillExtrusionOpacity: StyleTypes.Constant,
  fillExtrusionOpacityTransition: StyleTypes.Transition,
  fillExtrusionColor: StyleTypes.Color,
  fillExtrusionColorTransition: StyleTypes.Transition,
  fillExtrusionTranslate: StyleTypes.Translation,
  fillExtrusionTranslateTransition: StyleTypes.Transition,
  fillExtrusionTranslateAnchor: StyleTypes.Translation,
  fillExtrusionPattern: StyleTypes.Image,
  fillExtrusionPatternTransition: StyleTypes.Transition,
  fillExtrusionHeight: StyleTypes.Constant,
  fillExtrusionHeightTransition: StyleTypes.Transition,
  fillExtrusionBase: StyleTypes.Constant,
  fillExtrusionBaseTransition: StyleTypes.Transition,

  rasterOpacity: StyleTypes.Constant,
  rasterOpacityTransition: StyleTypes.Transition,
  rasterHueRotate: StyleTypes.Constant,
  rasterHueRotateTransition: StyleTypes.Transition,
  rasterBrightnessMin: StyleTypes.Constant,
  rasterBrightnessMinTransition: StyleTypes.Transition,
  rasterBrightnessMax: StyleTypes.Constant,
  rasterBrightnessMaxTransition: StyleTypes.Transition,
  rasterSaturation: StyleTypes.Constant,
  rasterSaturationTransition: StyleTypes.Transition,
  rasterContrast: StyleTypes.Constant,
  rasterContrastTransition: StyleTypes.Transition,
  rasterFadeDuration: StyleTypes.Constant,
  rasterFadeDurationTransition: StyleTypes.Transition,

  backgroundColor: StyleTypes.Color,
  backgroundColorTransition: StyleTypes.Transition,
  backgroundPattern: StyleTypes.Image,
  backgroundPatternTransition: StyleTypes.Transition,
  backgroundOpacity: StyleTypes.Constant,
  backgroundOpacityTransition: StyleTypes.Transition,

  visibility: StyleTypes.Constant,
};

export default styleMap;
