"use client";

import { useState } from "react";
import styles from "./CheckoutPage.module.css";

/**
 * OrderSummary — right column sticky card
 *
 * Props:
 *   items        {Array}   — cart items [{ id, name, variant, price, image }]
 *   subtotal     {string}  — e.g. "$0.00"
 *   total        {string}  — e.g. "$0.00"
 *   originalTotal {string=} — shown struck-through in red if provided
 */
function OrderSummary({ items = [], subtotal = "$0.00", total = "$0.00", originalTotal }) {
    return (
        <aside className={styles["checkout-summary"]} aria-label="Order summary">
            <div className={styles["checkout-summary__header"]}>
                <h2 className={styles["checkout-summary__title"]}>Summary</h2>
            </div>

            {/* Cart items or empty state */}
            {items.length === 0 ? (
                <div className={styles["checkout-summary__empty"]}>
                    <div className={styles["checkout-summary__empty-icon"]} aria-hidden="true">+</div>
                    <p className={styles["checkout-summary__empty-text"]}>Your cart is empty</p>
                </div>
            ) : (
                <div className={styles["checkout-summary__items"]}>
                    {items.map((item) => (
                        <div key={item.id} className={styles["cart-item"]}>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles["cart-item__image"]}
                                />
                            )}
                            <div className={styles["cart-item__info"]}>
                                <p className={styles["cart-item__name"]}>{item.name}</p>
                                {item.variant && (
                                    <p className={styles["cart-item__variant"]}>{item.variant}</p>
                                )}
                            </div>
                            <span className={styles["cart-item__price"]}>{item.price}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Promo code */}
            <div className={styles["checkout-summary__promo"]}>
                <p className={styles["checkout-summary__promo-label"]}>
                    Have a promo code or gift card?
                </p>
            </div>

            {/* Totals */}
            <div className={styles["checkout-summary__totals"]}>
                <div className={styles["checkout-summary__row"]}>
                    <p className={styles["checkout-summary__row-label"]}>Subtotal</p>
                    <p className={styles["checkout-summary__row-value"]}>{subtotal}</p>
                </div>
                <div className={styles["checkout-summary__row"]}>
                    <p className={styles["checkout-summary__row-label"]}>Total</p>
                    <p className={styles["checkout-summary__row-value--total"]}>
                        {originalTotal && (
                            <span className={styles["checkout-summary__row-value--strike"]}>
                                {originalTotal}
                            </span>
                        )}
                        {total}
                    </p>
                </div>
            </div>
        </aside>
    );
}

/**
 * CheckoutPage
 *
 * Props:
 *   brandName        {string}    — brand name shown in marketing opt-in label
 *   signInHref       {string=}   — href for "Sign in" link
 *   onSignUpEmail    {function=} — called when "Sign up with email" is clicked
 *   cartItems        {Array=}    — see OrderSummary `items` prop
 *   subtotal         {string=}
 *   total            {string=}
 *   originalTotal    {string=}
 *   steps            {Array=}    — override default steps array [{ id, step, title, active }]
 *   className        {string=}
 */
export default function CheckoutPage({
    brandName = "Joli+Blokes",
    signInHref = "#",
    onSignUpEmail,
    cartItems = [],
    subtotal = "$0.00",
    total = "$0.00",
    originalTotal,
    steps,
    className = "",
}) {
    const [marketingOptIn, setMarketingOptIn] = useState(false);

    const defaultSteps = [
        { id: 1, step: "1 of 3", title: "Sign up", active: true },
        { id: 2, step: "2 of 3", title: "Shipping Address", active: false },
        { id: 3, step: "3 of 3", title: "Payment", active: false },
    ];

    const resolvedSteps = steps || defaultSteps;

    return (
        <div className={`${styles["checkout-page"]} ${className}`}>
            <div className={styles["checkout-page__inner"]}>

                {/* ── Left Column ── */}
                <div className={styles["checkout-left"]}>

                    {/* Already have account banner */}
                    <div className={styles["checkout-account-banner"]}>
                        Already have an account?{" "}
                        <a href={signInHref}>Sign in</a>
                    </div>

                    {/* Steps */}
                    {resolvedSteps.map((s, idx) => (
                        <div key={s.id} className={styles["checkout-step"]}>
                            <p className={styles["checkout-step__meta"]}>{s.step}</p>
                            <h2
                                className={`${styles["checkout-step__title"]} ${
                                    !s.active ? styles["checkout-step__title--muted"] : ""
                                }`}
                            >
                                {s.title}
                            </h2>

                            {/* Step 1 content */}
                            {idx === 0 && s.active && (
                                <>
                                    <button
                                        className={styles["checkout-btn-email"]}
                                        onClick={onSignUpEmail}
                                        type="button"
                                    >
                                        Sign up with email
                                    </button>

                                    <div className={styles["checkout-checkbox-row"]}>
                                        <input
                                            type="checkbox"
                                            id="marketing-opt-in"
                                            checked={marketingOptIn}
                                            onChange={(e) => setMarketingOptIn(e.target.checked)}
                                        />
                                        <label htmlFor="marketing-opt-in">
                                            I want to receive offers, updates, and marketing emails
                                            from {brandName}.
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Right Column — Summary ── */}
                <OrderSummary
                    items={cartItems}
                    subtotal={subtotal}
                    total={total}
                    originalTotal={originalTotal}
                />
            </div>
        </div>
    );
}
