import type React from 'react';
import type { ReactNode } from 'react';
import classes from './panel.module.css';

type PanelProps = {
  /**
   * Content to be displayed inside the panel.
   */
  children: ReactNode;
  /**
   * Style of the panel border, either 'thin' or 'medium'
   * @default 'thin'
   */
  borderStyle?: 'thin' | 'medium';
  /** Padding inside the panel
   * @default '4px'
   */
  padding?: string;
  /** Background opacity of the panel
   * @default 0.5
   */
  backgroundOpacity?: number;
  /** Whether the panel text should be bold
   * @default false
   */
  bold?: boolean;
};

export function Panel({
  children,
  borderStyle = 'thin',
  padding = '4px',
  backgroundOpacity = 0.5,
  bold = false,
}: PanelProps) {
  const borderClass = borderStyle === 'medium' ? classes.medium : '';
  return (
    <div
      className={`${classes.panel} ${borderClass} ${bold ? classes.bold : ''}`}
      style={
        {
          '--eo-ui-panel-padding': padding,
          '--eo-ui-panel-background-opacity': backgroundOpacity,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
