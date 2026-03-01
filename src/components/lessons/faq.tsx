"use client";

import { Accordion } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function LessonsFaq() {
  return <Accordion items={[...FAQ_ITEMS]} />;
}
