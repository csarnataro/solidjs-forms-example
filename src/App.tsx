import "./App.css";
import { Component, createEffect, createSignal } from "solid-js";

const App: Component = () => {
  const [name, setName] = createSignal("");
  const [surname, setSurname] = createSignal("");
  const [address, setAddress] = createSignal("");
  const [shippingAddress, setShippingAddress] = createSignal("");
  const [sameAsAddress, setSameAsAddress] = createSignal(false);

  const handleSubmit = (event: Event): void => {
    event.preventDefault();
    const dataToSubmit = {
      name: name(),
      surname: surname(),
      address: address(),
      shipping_address: sameAsAddress() ? null : shippingAddress()
    };

    // should be sending data via POST request...
    console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
  };

  createEffect(() => {
    if (sameAsAddress()) {
      setShippingAddress("");
    }
  });

  return (
    <div class="App">
      <h1>Submitting a form with SolidJS, the naive way</h1>
      <p>
        For a more Solid solution, check out{" "}
        <a href="https://codesandbox.io/s/solidjs-submit-form-with-store-6kh4c?file=/src/App.tsx">
          this companion sandbox
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        <div class="form-control">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name()}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div class="form-control">
          <label for="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={surname()}
            onChange={(e) => setSurname(e.currentTarget.value)}
          />
        </div>
        <div class="form-control">
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address()}
            onChange={(e) => setAddress(e.currentTarget.value)}
          />
        </div>
        <div class="form-control">
          <label for="shipping-address">Same as address</label>
          <input
            type="checkbox"
            id="same-address"
            checked={sameAsAddress()}
            onChange={(e) => setSameAsAddress(e.currentTarget.checked)}
          />
        </div>
        <div class="form-control">
          <label for="shipping-address">Shipping address:</label>
          <input
            type="text"
            id="shipping-address"
            value={shippingAddress()}
            disabled={sameAsAddress()}
            readonly={sameAsAddress()}
            onChange={(e) => setShippingAddress(e.currentTarget.value)}
          />
        </div>
        <input class="form-submit" type="submit" value="Submit order" />
      </form>
    </div>
  );
};

export default App;
