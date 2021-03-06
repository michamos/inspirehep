const { routes, selectors } = require('../../utils/constants');
const { createPollyInstance } = require('../../utils/polly');
const {
  takeScreenShotForDesktop,
  takeScreenShotForMobile,
} = require('../../utils/screenshot');

describe('Literature Search', () => {
  it('should match image snapshot for empty literature search', async () => {
    await page.setRequestInterception(true);
    const polly = createPollyInstance('LiteratureSearch');

    await page.goto(`${routes.public.literatureSearch}?q=`, {
      waitUntil: 'networkidle0',
    });
    await page.waitFor(selectors.searchResults);

    const desktopSS = await takeScreenShotForDesktop(page);
    expect(desktopSS).toMatchImageSnapshot();

    const mobileSS = await takeScreenShotForMobile(page);
    expect(mobileSS).toMatchImageSnapshot();

    await polly.stop();
  });
});
