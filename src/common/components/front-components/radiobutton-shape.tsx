import { ShapeSizeRestrictions } from '@/core/model';
import { forwardRef, useMemo } from 'react';
import { Group, Circle, Text } from 'react-konva';
import { ShapeProps } from './shape.model';
import { fitSizeToShapeSizeRestrictions } from '@/common/utils/shapes/shape-restrictions';

const radioButtonShapeRestrictions: ShapeSizeRestrictions = {
  minWidth: 50,
  minHeight: 30,
  maxWidth: 200,
  maxHeight: 50,
  defaultWidth: 120,
  defaultHeight: 50,
};

export const getRadioButtonShapeSizeRestrictions = (): ShapeSizeRestrictions =>
  radioButtonShapeRestrictions;

export const RadioButtonShape = forwardRef<any, ShapeProps>(
  (
    { x, y, width, height, id, onSelected, text, otherProps, ...shapeProps },
    ref
  ) => {
    const { width: restrictedWidth, height: restrictedHeight } =
      fitSizeToShapeSizeRestrictions(
        radioButtonShapeRestrictions,
        width,
        height
      );

    const isOn = useMemo(
      () => otherProps?.checked ?? true,
      [otherProps?.checked]
    );

    const radius = restrictedHeight / 2;

    return (
      <Group
        x={x}
        y={y}
        ref={ref}
        width={restrictedWidth}
        height={restrictedHeight}
        {...shapeProps}
        onClick={() => onSelected(id, 'radiobutton')}
      >
        {/* Círculo exterior del radio button */}
        <Circle
          x={radius}
          y={radius}
          radius={radius}
          stroke="black"
          strokeWidth={2}
        />

        {/* Círculo interior del radio button (checked) */}
        <Circle
          x={radius}
          y={radius}
          radius={radius * 0.5}
          fill={isOn ? 'black' : 'white'}
        />

        {/* Texto */}
        <Text
          x={radius * 2 + 10}
          y={radius * 0.5 + 5}
          text={text}
          fontFamily="Comic Sans MS, cursive"
          fontSize={20}
          fill="none"
          verticalAllign="middle"
        />
      </Group>
    );
  }
);
