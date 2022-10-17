// Behavior
const script = function (props) {
  if (!props.contractAddress || !props.abi) return;

  const address = props.contractAddress;
  const abi = JSON.parse(props.abi);

  abi
    .filter((item) => item.type === "function" && item.name === props.method)
    .forEach((fnItem) => {
      if (fnItem.name === props.method) {
        const inputs = fnItem.inputs;
        inputs.forEach((input, index) => {
          const target = `#sc-ui-group-${index}`;
          const parentItem = $(`${target}`);
          parentItem.removeClass("d-none");
          $(`${target} span`).first().text(input.name);
          $(`${target} input`).first().attr("placeholder", input.name);
        });
      }
    });

  const onClick = async (e) => {
    e.preventDefault();
    try {
      trigger_field = document.getElementById(e.target.id);
      trigger_form = trigger_field.form;
      var formData = new FormData(trigger_form);
      const provider = new ethers.providers.Web3Provider(window.walletProvider);
      const account = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const obj = Object.fromEntries(
        new FormData(document.querySelector("#sc-ui-form"))
      );
      const values = Object.values(obj);
      // Filter only args for method
      const fnItem = abi.find(
        (item) => item.type === "function" && item.name === props.method
      );
      const args = values.slice(0, fnItem.inputs.length);
      const contract = new ethers.Contract(address, abi, signer);
      const targetFn = contract[props.method];
      const transaction = await targetFn.apply(null, args);
      const tx = await transaction.wait();
      $(".toast").data("autohide", true);
      $(".toast").data("delay", 3500);
      $("#toast-title").text = "Success";
      $("#toast-body").html(
        `Tx ID: <a href="${tx.transactionHash}" target="__blank">${tx.transactionHash}</a>`
      );
      $("#toast-body").removeClass("bg-error");
      $("#toast-body").addClass("bg-success");
      $(".toast").toast("show");
    } catch (ex) {
      $(".toast").data("autohide", false);
      $(".toast").data("delay", 3500);
      $("#toast-title").text = "Error";
      $("#toast-body").html(ex);
      $("#toast-body").removeClass("bg-success");
      $("#toast-body").addClass("bg-error");
      $(".toast").toast("show");
    }
  };

  document.querySelector("#sc-ui-cta").addEventListener("click", onClick);
};

export default script;
