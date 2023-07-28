/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-28 11:56:22
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-28 11:56:27
 * @FilePath: /ruankao-website/lib/useScript.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
"use client"
import { useEffect, useState } from "react";

// we need a function that accepts the script src and couple of other parameters

const useScript = (params) => {
  const { url, theme, issueTerm, repo, ref } = params;

  const [status, setStatus] = useState(url ? "loading" : "idle");

  console.log(params);

  // run the useEffect when the url of the script changes
  useEffect(() => {
      if (!url) {
        setStatus("idle");
        return;
      }

      let script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("theme", theme);
      script.setAttribute("issue-term", issueTerm);
      script.setAttribute("repo", repo);

      // Add script to document body
      ref.current.appendChild(script);

      // store status of the script

      const setAttributeStatus = (event) => {
        /**
         * Console.log value from event
            {
                bubbles: false
                cancelBubble: false
                cancelable: false
                composed: false
                currentTarget: null
                defaultPrevented: false
                eventPhase: 0
                isTrusted: true
                path: [script]
                returnValue: true
                srcElement: null
                target: null
                timeStamp: 276483.5
                type: "load"
            }

            based on the type property we will get know whether script is ready or errored out
            */

        setStatus(event.type === "load" ? "ready" : "error");

      };

      script.addEventListener("load", setAttributeStatus);
      script.addEventListener("error", setAttributeStatus);

      return () => {
       // useEffect clean up
        if (script) {
          script.removeEventListener("load", setAttributeStatus);
          script.removeEventListener("error", setAttributeStatus);
        }
      };

  }, [url]);
  return status;
};

export default useScript;
