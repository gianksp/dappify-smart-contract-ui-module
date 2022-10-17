const block = {
  id: `section-${process.env.MODULE_ID}`,
  label: `
    <?xml version="1.0" encoding="utf-8"?>
    <svg id="master-artboard" viewBox="0 0 266 152" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="enable-background:new 0 0 1400 980;" width="266px" height="152px"><rect id="ee-background" x="0" y="0" width="266" height="152" style="fill: white; fill-opacity: 0; pointer-events: none;"/><defs><linearGradient id="a" x1="8.94" y1="18.11" x2="8.91" y2="13.59" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32bedd"/><stop offset=".36" stop-color="#34c1e0"/><stop offset=".63" stop-color="#3ccbe8"/><stop offset=".88" stop-color="#48dbf6"/><stop offset="1" stop-color="#50e6ff"/></linearGradient></defs><g transform="matrix(0.19291013296328605, 0, 0, 0.19291011799154514, -1.2324885356258852, -18.30322853555643)"><g transform="matrix(5.263157844543457, 0, 0, 5.263157844543457, 0.000010024021321441978, 95.26316070556639)"><path fill="#FFFFFF" d="M0 0h266v150H0z"/><path d="M 139.490478515625 140.6123809814453 L 144.48318481445312 135.1204071044922" style="fill: rgb(74, 85, 104); fill-opacity: 1; stroke: rgb(0, 0, 0); stroke-opacity: 1; stroke-width: 0; paint-order: fill;"/><path d="M 108.2861099243164 120.3919448852539 L 100.29779052734375 106.41238403320312" style="fill: rgb(226, 232, 240); fill-opacity: 1; stroke: rgb(0, 0, 0); stroke-opacity: 1; stroke-width: 0; paint-order: fill;" transform="matrix(1.254390001296997, 0, 0, 1.254390001296997, -32.138678079344366, -20.141844845561202)"/><path d="M 78.08027648925781 57.73356246948242 L 75.83355712890625 54.73794174194336" style="fill: rgb(226, 232, 240); fill-opacity: 1; stroke: rgb(0, 0, 0); stroke-opacity: 1; stroke-width: 0; paint-order: fill;"/></g></g><g transform="matrix(5.466352462768555, 0, 0, 5.466352462768555, 82.33493644406917, 24.963499876590845)"><path fill="#773adc" d="M15.43 3.76v7.48L9 15V7.51l6.43-3.75z"/><path fill="#b796f9" d="M15.43 3.76L9 7.52 2.57 3.76 9 0l6.43 3.76z"/><path fill="#a67af4" d="M9 7.52V15l-6.43-3.76V3.76L9 7.52z"/><path d="M11.89 9L9.06 6.12a.15.15 0 00-.21 0L6 9a.14.14 0 00.11.24h1.67a.15.15 0 01.15.15V12a.15.15 0 00.14.15h1.76A.15.15 0 0010 12V9.35a.15.15 0 01.14-.15h1.67a.14.14 0 00.08-.2z" fill="#fff"/><path d="M 5.78 11.81 H 12.06 A 0.37 0.37 0 0 1 12.43 12.18 V 17.63 A 0.37 0.37 0 0 1 12.06 18 H 5.78 A 0.37 0.37 0 0 1 5.41 17.63 V 12.18 A 0.37 0.37 0 0 1 5.78 11.81 Z" fill="url(#a)" style="fill: rgb(145, 158, 255);"/><path d="M8.1 16.3l-1.41-1.41 1.38-1.38a.1.1 0 000-.14l-.22-.22a.12.12 0 00-.14 0l-1.6 1.6a.22.22 0 000 .22.18.18 0 000 .07l1.62 1.62a.1.1 0 00.14 0l.22-.22a.1.1 0 00.01-.14zm3.9-1.55l-1.59-1.6a.12.12 0 00-.14 0l-.22.22a.1.1 0 000 .14l1.37 1.38L10 16.3a.1.1 0 000 .14l.22.22a.1.1 0 00.14 0L12 15a.2.2 0 000-.25z" fill="#fff"/><path d="M 9.23154354095459 17.0307674407959 L 8.719136238098145 17.543176651000977" style="fill: rgb(145, 158, 255); fill-opacity: 1; stroke: rgb(0, 0, 0); stroke-opacity: 1; stroke-width: 0; paint-order: fill;"/></g></svg>
  `,
  category: "Smart Contract UI",
  content: `
        <section id="${process.env.MODULE_ID}">
          <div style="position: fixed; top: 0; right: 0; min-width: 300px;">
              <div class="toast" data-autohide="false">
                  <div class="toast-header">
                      <strong class="mr-auto" id="toast-title">Sample Toast</strong>
                      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                  </div>
                  <div class="toast-body" id="toast-body">
                      Hi, Welcome to tutlane.com.
                  </div>
              </div>
          </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div class="col">
                  <form id="sc-ui-form">
                    <div class="form-group d-none" id="sc-ui-group-0">
                      <label for="sc-ui-input-0">Smart Contract Function Attribute 1</label>
                      <input type="text" class="form-control" id="sc-ui-input-0" name="sc-ui-input-0" placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-1">
                      <label for="sc-ui-input-1">Smart Contract Function Attribute 2</label>
                      <input type="text" class="form-control" id="sc-ui-input-1" name="sc-ui-input-1" placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-2">
                      <label for="sc-ui-input-2">Smart Contract Function Attribute 3</label>
                      <input type="text" class="form-control" id="sc-ui-input-2" name="sc-ui-input-2" placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-3">
                      <label for="sc-ui-input-3">Smart Contract Function Attribute 4</label>
                      <input type="text" class="form-control" id="sc-ui-input-3" name="sc-ui-input-3" placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-4">
                      <label for="sc-ui-input-4">Smart Contract Function Attribute 5</label>
                      <input type="text" class="form-control" id="sc-ui-input-4" name="sc-ui-input-4 placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-5">
                      <label for="sc-ui-input-5">Smart Contract Function Attribute 6</label>
                      <input type="text" class="form-control" id="sc-ui-input-5" name="sc-ui-input-5" placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-6">
                      <label for="sc-ui-input-6">Smart Contract Function Attribute 7</label>
                      <input type="text" class="form-control" id="sc-ui-input-6" name="sc-ui-input-6" placeholder="Example input">
                    </div>
                    <div class="form-group d-none" id="sc-ui-group-7">
                      <label for="sc-ui-input-7">Smart Contract Function Attribute 8</label>
                      <input type="text" class="form-control" id="sc-ui-input-7" name="sc-ui-input-7" placeholder="Another input">
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary btn-lg btn-block" id="sc-ui-cta">Smart Contract Action</button><br>
                    </div>
                  </form>
                </div>
                </div>
            </div>
        </section>
    `,
};

export default block;
