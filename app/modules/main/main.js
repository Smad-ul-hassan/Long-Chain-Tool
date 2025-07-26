import { Stagehand } from "@browserbasehq/stagehand";
import dotenv from "dotenv";
dotenv.config();

export const Main = async () => {
  const stagehand = new Stagehand({
    apiKey: process.env.OPENAI_API_KEY,
    modelName: "openai/gpt-4o",
    env: "LOCAL",
  });

  await stagehand.init();

  const page = stagehand.page;
  const agent = stagehand.agent();

  await page.goto("https://www.youtube.com");
  await page.waitForLoadState("networkidle");
  await agent.execute(
    "Find and navigate to MrBeast's YouTube channel and Subscribe to it"
  );
  // await page.waitForLoadState("load");
  // await page.waitForTimeout(2000);
  // await browser.close();
};
