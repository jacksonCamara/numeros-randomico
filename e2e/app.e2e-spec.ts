import { SimulacaoDiscretaM2T1Page } from './app.po';

describe('simulacao-discreta-m2-t1 App', () => {
  let page: SimulacaoDiscretaM2T1Page;

  beforeEach(() => {
    page = new SimulacaoDiscretaM2T1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
