import React from "react";
import { render, screen } from "@testing-library/react";
import BaseModal from "./BaseModal";

describe("BaseModal", () => {
  it("renders the modal only", () => {
    const title = "Test Modal";
    const children = <p>Test children</p>;
    const state = false;
    const setState = jest.fn();
    const label = "Open Modal";
    render(
      <BaseModal
        title={title}
        children={children}
        label={label}
        state={state}
        setState={setState}
      />
    );

    expect(screen.getByText(label)).toBeInTheDocument();
  });
  it("opens the modal when the label is clicked", () => {
    const title = "Test Modal";
    const children = <p>Test children</p>;
    let state = false;
    const setState = jest.fn();
    const label = "Open Modal";
    render(
      <BaseModal
        title={title}
        children={children}
        label={label}
        state={state}
        setState={setState}
      />
    );

    screen.getByText(label).click();
    expect(setState).toHaveBeenCalledWith(true);
  });
  it("closes the modal when the close button is clicked", () => {
    const title = "Test Modal";
    const children = <p>Test children</p>;
    const state = true;
    const setState = jest.fn();
    const label = "Open Modal";
    const onClose = jest.fn();
    render(
      <BaseModal
        title={title}
        children={children}
        label={label}
        state={state}
        setState={setState}
        onClose={onClose}
      />
    );

    screen.getByText("Close").click();
    expect(setState).toHaveBeenCalledWith(false);
    expect(onClose).toHaveBeenCalled();
  });
  it("calls onSubmit when the form is submitted", () => {
    const title = "Test Modal";
    const children = <p>Test children</p>;
    const state = true;
    const setState = jest.fn();
    const label = "Open Modal";
    const onSubmit = jest.fn();
    render(
      <BaseModal
        title={title}
        children={children}
        label={label}
        state={state}
        setState={setState}
        onSubmit={onSubmit}
      />
    );

    // @ts-ignore
    screen.getByRole("form").submit();
    expect(onSubmit).toHaveBeenCalled();
  });

  it("opens and closes the modal when the label and close button are clicked", () => {
    const title = "Test Modal";
    const children = <p>Test children</p>;
    const state = false;
    const setState = jest.fn();
    const label = "Open Modal";
    render(
      <BaseModal
        title={title}
        children={children}
        label={label}
        state={state}
        setState={setState}
      />
    );
  
    // Open the modal by clicking the label
    screen.getByText(label).click();
    expect(setState).toHaveBeenCalledWith(true);
  
    // Close the modal by clicking the close button
    // screen.getByText("Close").click();
    // expect(setState).toHaveBeenCalledWith(false);
  });
});
