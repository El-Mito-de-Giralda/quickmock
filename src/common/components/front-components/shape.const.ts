const DEFAULT_CORNER_RADIUS = 4;
const DEFAULT_STROKE_COLOR = '#000000';
const DEFAULT_STROKE_WIDTH = 1;
const DEFAULT_STROKE_STYLE: number[] = [];
const DEFAULT_FILL_BACKGROUND = '#ffffff';
const DEFAULT_FONT_FAMILY = 'Comic Sans MS, cursive';
const DEFAULT_FONT_SIZE = 16;
const DEFAULT_FILL_TEXT = '#000000';
const DEFAULT_PADDING = 10;
const DEFAULT_LINE_HEIGHT = 1.25;
const DEFAULT_FILL_TEXT_INPUT = '#8c8c8c';
const DEFAULT_FONT_SIZE_INPUT = 15;
const DEFAULT_TEXT_WIDTH = 155;
const DEFAULT_TEXT_HEIGHT = 38;

interface DefaultStyleShape {
  DEFAULT_CORNER_RADIUS: number;
  DEFAULT_STROKE_COLOR: string;
  DEFAULT_STROKE_WIDTH: number;
  DEFAULT_FILL_BACKGROUND: string;
  DEFAULT_FONT_FAMILY: string;
  DEFAULT_FONT_SIZE: number;
  DEFAULT_FILL_TEXT: string;
  DEFAULT_PADDING: number;
  DEFAULT_LINE_HEIGHT: number;
  DEFAULT_TEXT_WIDTH: number;
  DEFAULT_TEXT_HEIGHT: number;
  DEFAULT_STROKE_STYLE: number[];
}

export const BASIC_SHAPE: DefaultStyleShape = {
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_FILL_BACKGROUND,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  DEFAULT_FILL_TEXT,
  DEFAULT_PADDING,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_TEXT_WIDTH,
  DEFAULT_TEXT_HEIGHT,
  DEFAULT_STROKE_STYLE,
};

export const INPUT_SHAPE: DefaultStyleShape = {
  DEFAULT_CORNER_RADIUS,
  DEFAULT_STROKE_COLOR,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_FILL_BACKGROUND,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE: DEFAULT_FONT_SIZE_INPUT,
  DEFAULT_FILL_TEXT: DEFAULT_FILL_TEXT_INPUT,
  DEFAULT_PADDING,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_TEXT_WIDTH,
  DEFAULT_TEXT_HEIGHT,
  DEFAULT_STROKE_STYLE,
};

//! maybe a function to calc max height base on the text
