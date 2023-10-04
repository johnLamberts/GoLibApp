import fs from "fs";

import { faker } from "@faker-js/faker";
import { labels, priorities, statuses } from "./label";
import path from "path";

const tasks = Array.from({ length: 5 }, () => ({
  id: `TASK-${faker.datatype.number({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}));

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
);
