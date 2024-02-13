import "./App.css";
import { Component, createEffect } from "solid-js";
import { useForm } from "./useForm";

const App: Component = () => {
  const { form, updateFormField, submit, clearField } = useForm();

  const handleSubmit = (event: Event): void => {
    event.preventDefault();
    submit(form);
  };

  createEffect(() => {
    if (form.sameAsAddress) {
      clearField("shippingAddress");
    }
  });

  return (
    <div class="App">
      <h1>Submitting a form using SolidJS stores</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-control">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={updateFormField("name")}
          />
        </div>
        <div class="form-control">
          <label for="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            value={form.surname}
            onChange={updateFormField("surname")}
          />
        </div>
        <div class="form-control">
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            value={form.address}
            onChange={updateFormField("address")}
          />
        </div>
        <div class="form-control">
          <label for="shipping-address">Same as address</label>
          <input
            type="checkbox"
            id="same-address"
            checked={form.sameAsAddress}
            onChange={updateFormField("sameAsAddress")}
          />
        </div>
        <div class="form-control">
          <label for="shipping-address">Shipping address:</label>
          <input
            type="text"
            id="shipping-address"
            value={form.shippingAddress}
            disabled={form.sameAsAddress}
            readonly={form.sameAsAddress}
            onChange={updateFormField("shippingAddress")}
          />
        </div>
        <input class="form-submit" type="submit" value="Submit order" />
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
};

export default App;
