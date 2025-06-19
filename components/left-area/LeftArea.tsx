'use client';
import React from 'react';

import { cn } from '@/util/cn';

import { TabsContent } from '../ui/tabs';
import { LeftAreaItemProperties } from './LeftAreaItemProperties';
import { LeftAreaItemsDroppable } from './LeftAreaItemsDroppable';
import { LeftAreaRowDroppable } from './LeftAreaRowDroppable';
import { Row_1_Column_Component, Row_2_Column_Component, Row_3_Column_Component } from './row/rows';
interface Props {
  className?: string;
  children?: React.ReactNode;
}
export const LeftArea = ({ className }: Props) => {
  return (
    <>
      <TabsContent value="layout" className="bg-accent">
        <LeftAreaRowDroppable className={cn(className, 'flex flex-col gap-4 p-4')}>
          <Row_1_Column_Component />
          <Row_2_Column_Component />
          <Row_3_Column_Component />
        </LeftAreaRowDroppable>
      </TabsContent>
      <TabsContent value="items" className="bg-accent">
        <LeftAreaItemsDroppable className={cn(className, 'flex flex-col gap-4 p-4')}>
          <span className="cursor-not-allowed opacity-50">TEXT</span>
          <span className="cursor-not-allowed opacity-50">IMAGE</span>
        </LeftAreaItemsDroppable>
      </TabsContent>
      <TabsContent value={null!} className="bg-accent">
        <LeftAreaItemProperties />
      </TabsContent>
    </>
  );
};
