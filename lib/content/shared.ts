import type { ProjectPreview } from "./types"

/** Facts and media that are the same in every language. */

export const LASHTEST_SNIPPET = `from lashtest import APIClient

def test_get_user():
    with APIClient('https://jsonplaceholder.typicode.com').get('/users/1') as response:
        response.assert_status(200) \\
                .assert_json_contains({'id': 1}) \\
                .assert_response_time(2.0)`

export const previews = {
  lashtest: { kind: "code", language: "python", code: LASHTEST_SNIPPET },
  lashtestLab: { kind: "video", src: "/lashtest-lab", poster: "/lashtest-lab.webp" },
  scratchOs: { kind: "image", src: "/scratchos.webp" },
} satisfies Record<string, ProjectPreview>

export const links = {
  lashtest: { github: "https://github.com/sidalihmdn/lashtest", live: "https://pypi.org/project/lashtest/" },
  lashtestLab: { github: "https://github.com/sidalihmdn/TestBase", live: "https://www.lashtest.com/" },
  scratchOs: { github: "https://github.com/sidalihmdn/OS_from_scratch" },
}

export const rakuten = {
  company: "Rakuten France",
  companyUrl: "https://global.rakuten.com/corp/about/company/",
}

export const stack = {
  current: ["Selenium", "Appium", "Pytest", "Jenkins", "GitHub Actions", "SQL", "Python", "Postman", "Bruno", "JIRA"],
  intern: ["Selenium", "Appium", "Pytest", "OpenCV", "Jenkins", "GitHub Actions", "SQL", "Python", "Postman", "Bruno"],
}

export const certificationLinks = {
  ctal: "https://app.skillsclub.com/credential/263711-3f34ad1e6b705ad027c1e28a29024a0242d62e74573da8546340285f9af220e6?locale=en",
  ctfl: "https://app.skillsclub.com/credential/77521-770788ec0faef03c55eb02df7a9307b48fca5adccae179c48b104f81f2e45280?locale=en",
}

export const skills = {
  automation: ["Selenium", "Playwright", "Appium", "Pytest", "Cucumber"],
  languages: ["Python", "JavaScript", "C++", "C", "Java", "SQL", "Bash", "Gherkin"],
  tools: ["Jenkins", "GitHub Actions", "Docker", "Postman", "Bruno", "Charles Proxy", "Kubernetes", "Grafana", "Metabase"],
}
