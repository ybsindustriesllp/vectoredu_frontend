# UI/UX Changes — Analysis & Implementation Plan

> Source: user-provided document `UI_UX Changes.docx` (uploaded). See chat for reference.

---

## Summary

This markdown captures a cleaned, structured analysis of the requested UI/UX changes, grouped by screen (Login, Dashboard, Projects, Documents, Mentorship/Project Manager, Admin) with prioritized action items, visual/animation specs, data/behavioral requirements, acceptance criteria, and suggested implementation notes for engineering and design.

---

## Table of contents

1. Overview & priorities
2. Per-screen requirements
3. Visual & animation specifications
4. Behavior & data rules
5. Accessibility & responsiveness notes
6. Implementation tasks & sprint suggestions
7. Acceptance criteria & QA checklist
8. Appendix: inspiration links

---

## 1. Overview & priorities

**Primary goals**

* Simplify dashboard and focus student attention on active tasks.
* Replace/remove secondary gamification elements (Team Leaderboard, Achievements/Badges).
* Add automation features (ticket generation, automatic task updates, MOM generation/summarization).
* Improve visual hierarchy and introduce subtle, modern animations for engagement.

**Priority (High → Low)**

1. Dashboard: integrate analytics, remove team leaderboard, implement single `Tasks` card behavior.
2. Tasks & Projects: automatic state updates, ticket generation integration.
3. Documents: consistent action alignment, document pop-up behavior.
4. Mentorship/Project Manager: central card alignment, MOM generation, push-notification animation.
5. Buttons & animations: neon glow & slide-in buttons; global animation guidance.
6. Admin/Project Manager screens: layout finalization and element placement.

---

## 2. Per-screen requirements

### Login Page

* (No explicit UI fields provided in the source; keep current layout but ensure visual consistency with new button styles and theme.)

### Dashboard

* **Integrate `ANALYTICS` window** into main Dashboard area instead of a separate window.
* **Remove `Team Leaderboard`.**
* Replace `Upcoming Tasks` with a single card named **`Tasks`** with the following behavior:

  * **Show `In Progress` tasks first.**
  * As `In Progress` tasks finish one-by-one, show `To Do` tasks from the bottom upward (i.e., the earliest `To Do` should flow in to replace completed `In Progress` tasks).
  * **Only 3 tasks visible** in the card at a time.
  * Card should be visually highlighted (strong contrast / accent) to draw students' focus.
  * Place the `Tasks` card as a single wide card at the bottom of the dashboard (since leaderboard is removed).
* Visual spacing: make the page feel spacious; enlarge containers and increase whitespace.

### Projects

* Kanban columns: To Do, In Progress, Review, Done — tasks should move and **update themselves automatically** based on progress state (via events or status field updates).
* **Ticket generation**: add a UI control to create a ticket; generated tickets should appear automatically in the tasks list (create → status=To Do or In Progress based on configuration).

### Documents

* Align **Edit** and **Export** buttons on a single horizontal line for each card.
* Implement pop-up detail view for document cards similar to existing `Document Template` pop-up.

### Mentorship / Project Manager

* Center-align cards with consistent spacing.
* Include **MOM (Minutes of Meeting) generation** and **summarization assistance** (action item extraction + short summary) for teammates and project managers.
* Add **push notification** animation for notification items within the Project Manager window.
* Remove **Achievements and Badges** card.

### Admin Login

* Source lists specific items for admin but not filled in; leave a placeholder area for Admin-only elements to be added later.

---

## 3. Visual & animation specifications

### Buttons

* **Neon Glow Button**

  * Outer neon-colored border + soft glow shadow.
  * Hover: background fills with the neon color (high contrast on dark background).
  * Use `box-shadow` and `border-image` or `filter: drop-shadow()` for subtle glow.

* **Slide-in from bottom background animation**

  * On hover, a colored overlay slides in from bottom to top (use pseudo-element ::before or ::after and transform/translateY).
  * Ensure accessible focus states (focus-visible) and reduced-motion support.

### Card & Hover Effects

* Suggest holographic / subtle depth card effects, cursor micro-interactions, and social icons hover patterns as inspiration (see Appendix link). Use these sparingly — prefer subtlety.

### Notifications

* Push-notification animation: small upward motion + brief shadow pulse, then settle. Use `animation` with `transform` and `opacity`.

---

## 4. Behavior & data rules

* **Tasks card behavior (dashboard)**

  * Data source: tasks API sorted by status and priority.
  * Render order: In Progress (top), then To Do (from bottom as replacement when In Progress finishes).
  * Only show max 3 tasks; if fewer than 3 In Progress exist, show To Do tasks under them until 3 slots filled.
  * Live updates via WebSockets or polling to reflect real-time changes.

* **Automatic task update (projects)**

  * Task objects must include a status field and `progress_events` (timestamps + actor). A status transition triggers UI movement.

* **Ticket generation**

  * Ticket created from Projects UI: call ticket API, on success create a task entity (status default configurable). The UI should optimistically show the generated ticket and then reconcile with server response.

* **MOM generation & summarization**

  * Inputs: meeting transcript or selected messages.
  * Outputs: short summary, action items (assignee + due date if parsable), and optional longer note.
  * Implementation: call server-side summarization microservice (LLM) with a policy of sanitizing PII.

---

## 5. Accessibility & responsiveness

* Ensure animations respect `prefers-reduced-motion`.
* Buttons and cards must have accessible contrast ratios (WCAG AA minimum for text, AAA preferable for primary CTAs).
* Layout must be responsive: on small screens, `Tasks` card stacks above/below other elements; keep max 3 task rows but adapt spacing.

---

## 6. Implementation tasks & sprint suggestions

**Sprint 1 (2 weeks)**

* Dashboard: remove Team Leaderboard, integrate Analytics, implement `Tasks` card layout & behavior (rendering only, data stubbed).
* Basic CSS for neon & slide-in button variants; design tokens for neon accent colors.

**Sprint 2 (2 weeks)**

* Real-time tasks flow: WebSocket/polling integration to refill the Tasks card slots; implement server-side ordering if needed.
* Projects: automatic status updates and ticket generation flow (API hooks + UI).

**Sprint 3 (1–2 weeks)**

* Documents: align action buttons, implement card pop-ups.
* Mentorship PM: center card layout, push-notification animation, and MOM summarization microservice integration (server + UI).

**Cross-cutting tasks**

* Add design tokens (colors, spacing, shadows) and a small component library for neon buttons & card patterns.
* QA & accessibility pass.

---

## 7. Acceptance criteria & QA checklist

* [ ] `Tasks` card visible at bottom of Dashboard, titled `Tasks`.
* [ ] Only 3 tasks visible; priority order: In Progress then To Do.
* [ ] Removing Team Leaderboard — no traces in UI or navigation.
* [ ] Analytics window integrated and visible in dashboard layout.
* [ ] Ticket creation produces tasks visible in Projects and Tasks card.
* [ ] Edit & Export buttons aligned horizontally on Document cards.
* [ ] Document cards open a pop-up detail view similar to Document Template.
* [ ] MOM generation returns a short summary + action items; at least one sample meeting processed end-to-end.
* [ ] Notifications in PM window show push animation on new notifications.
* [ ] All new animations respect `prefers-reduced-motion`.

---

## 8. Appendix: inspiration & references

* CSS hover effects inspiration: [https://prismic.io/blog/css-hover-effects](https://prismic.io/blog/css-hover-effects)

---

## Notes & open questions (for product/design/engineering)

1. What are the exact data fields for tasks and tickets in the backend (to wire automatic updates)?
2. MOM generation: are we allowed to call an LLM? Do we need to keep everything on-prem / offline? (security/privacy requirements)
3. Admin screen content needs to be specified — current doc has placeholders.

---

*Prepared by: UI/UX analysis assistant.*
