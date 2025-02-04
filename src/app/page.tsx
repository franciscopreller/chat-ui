"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { CustomRuntimeProvider } from './runtime-provider';
 
export default function Home() {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });
 
  return (
    <CustomRuntimeProvider>
      <div className="h-full">
        <Thread />
      </div>
    </CustomRuntimeProvider>
  );
};
