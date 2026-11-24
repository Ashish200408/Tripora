# TRIPORA – PROJECT DEVELOPMENT RULES

## 1. PROJECT OVERVIEW

Project name: Tripora  
Industry: Travel and Tourism  
Tagline: Travel beyond the ordinary.  
Technology: React + Vite + TypeScript + Tailwind CSS v4.

Objective:
Build a premium, modern, responsive and interactive travel agency website that will be demonstrated to potential startup clients.

The final product must look like a professionally developed business website, not a basic student project or generic template.

---

## 2. MANDATORY RULE: INSPECT BEFORE MODIFYING

Before modifying any file:

1. Inspect the existing project structure.
2. Read the relevant source files.
3. Understand existing components and dependencies.
4. Identify possible side effects.
5. Preserve existing working functionality.

NEVER blindly overwrite existing files.

NEVER delete existing working code just to simplify implementation.

If a major structural change is necessary, explain why before proceeding.

---

## 3. CODE QUALITY RULES

- Use TypeScript wherever possible.
- Prefer reusable components.
- Avoid unnecessary code duplication.
- Use meaningful component, variable and function names.
- Keep components focused and maintainable.
- Separate business data from UI components.
- Avoid giant components containing the entire application.
- Avoid unnecessary inline styles.
- Use consistent formatting.
- Remove unused imports and dead code.
- Handle errors gracefully.
- Avoid TypeScript errors and console warnings.

Do not introduce unnecessary abstractions or complicated architecture for simple features.

---

## 4. UI/UX DESIGN RULES

Maintain a consistent premium design system throughout the application.

Brand colours:
- Deep teal: #142A32
- Warm ivory: #E9E2D5
- Sand gold: #B68C63
- Off-white: #F8F7F3

Typography:
- Playfair Display for headings.
- Inter for body text.

Design requirements:

- Premium editorial travel aesthetic.
- Consistent spacing and alignment.
- High-quality destination photography.
- Clear visual hierarchy.
- Consistent button styles.
- Consistent border radius.
- Subtle shadows.
- Smooth transitions.
- Carefully designed hover states.
- Consistent navigation and footer.

NEVER introduce unrelated colour palettes on individual pages.

NEVER make every section look like a collection of identical cards.

Avoid excessive gradients, animations, unnecessary decorations and visual clutter.

Every new page must follow the existing Tripora design system.

---

## 5. RESPONSIVE DESIGN RULES

Every component must work across:

- Mobile phones.
- Tablets.
- Laptops.
- Desktop screens.

Requirements:

- No horizontal overflow.
- No overlapping elements.
- No broken navigation.
- Images must scale correctly.
- Typography must remain readable.
- Buttons must be touch-friendly.
- Mobile navigation must work properly.

Do not consider a feature complete until its mobile layout has been checked.

---

## 6. FUNCTIONALITY RULES

Every visible interactive element must perform its intended action.

Examples:

- Navigation links must navigate.
- Buttons must perform meaningful actions.
- Search must return relevant results from available demo data.
- Filters must actually filter content.
- Wishlist must save and remove items.
- Forms must validate user input.
- Booking enquiry must display a confirmation state.
- Price estimators must calculate correctly.
- Mobile menus must open and close.

NEVER create decorative buttons that do nothing.

If a real external service is unavailable, implement a clearly labelled frontend demonstration instead of pretending the service works.

Do not claim actual bookings, payments or reservations have occurred.

---

## 7. FILE AND PROJECT STRUCTURE RULES

- Keep the project organized.
- Place reusable components in appropriate component folders.
- Keep page-specific components separate.
- Store mock data separately.
- Store utility functions in appropriate utility folders.
- Keep global styling centralized.
- Avoid unnecessary files.
- Avoid creating duplicate components.

Before introducing a new file, check whether an existing component can be reused.

---

## 8. DEPENDENCY RULES

- Reuse already installed dependencies.
- Do not install packages without a clear reason.
- Avoid duplicate libraries that perform the same function.
- Prefer lightweight solutions.
- Check package compatibility before installation.
- Do not modify package versions unnecessarily.

Ask for approval before adding a major dependency or changing the project's technology stack.

---

## 9. README.MD – CONTINUOUS DOCUMENTATION (MANDATORY)

README.md must be maintained throughout the entire development process.

Do not postpone documentation until the project is complete.

Whenever a development phase or meaningful feature is completed, update README.md alongside the code.

README.md must contain:

1. Project title and description.
2. Business concept and objectives.
3. Technology stack.
4. Features implemented.
5. Project folder structure.
6. Installation instructions.
7. Commands to run the application.
8. Environment configuration, if applicable.
9. Available application routes.
10. Functional feature descriptions.
11. Current development status.
12. Known limitations.
13. Future improvements.
14. Deployment instructions.
15. Credits and image attribution where applicable.

Documentation rules:

- Update the feature list after implementing new features.
- Update folder structure when the structure changes.
- Update installation instructions when dependencies or setup change.
- Update routes whenever pages are added.
- Record unfinished features honestly.
- Never claim a feature is completed if it is not working.
- Keep instructions accurate and reproducible.

README.md must always reflect the current state of the project.

Do not replace the entire README unnecessarily. Update the relevant sections while preserving useful existing documentation.

---

## 10. GIT AND CHANGE MANAGEMENT

- Preserve the existing Git repository.
- Never delete or overwrite Git history.
- Check Git status before major changes.
- Make logical commits after completed milestones.
- Do not commit secrets, API keys or environment files.
- Keep .gitignore updated.
- Never run destructive Git commands without explicit approval.

Prefer small, meaningful changes over large uncontrolled rewrites.

---

## 11. TESTING AND VALIDATION

After completing each major development task:

1. Run the production build.
2. Check TypeScript errors.
3. Check the browser console.
4. Verify navigation.
5. Test interactive elements.
6. Check mobile responsiveness.
7. Fix errors introduced by the changes.

Use:

npm run build

Do not report a successful build unless the command actually completes successfully.

If something fails, investigate the root cause rather than hiding the error.

---

## 12. PERFORMANCE AND ACCESSIBILITY

- Optimize large images.
- Avoid unnecessary JavaScript.
- Use semantic HTML.
- Provide image alt text.
- Use accessible form labels.
- Maintain sufficient colour contrast.
- Support keyboard navigation.
- Provide visible focus states.
- Respect reduced-motion preferences.
- Avoid unnecessary layout shifts.

Aim for a fast and smooth user experience.

---

## 13. SECURITY AND PRIVACY

- Never expose API keys or secrets in source code.
- Never commit .env files.
- Do not collect unnecessary personal information.
- Validate form inputs.
- Do not store sensitive personal information in LocalStorage.
- Do not create fake authentication or payment security claims.

---

## 14. ANTIGRAVITY AGENT WORKFLOW

For every new development task, follow this sequence:

STEP 1: Inspect
Understand existing files and relevant components.

STEP 2: Plan
Identify files that need modification and the expected outcome.

STEP 3: Implement
Make focused changes without damaging existing functionality.

STEP 4: Validate
Run appropriate checks and test the feature.

STEP 5: Document
Update README.md with the completed work.

STEP 6: Report
Provide a short summary containing:
- Files created.
- Files modified.
- Features implemented.
- Tests performed.
- Build status.
- README updates.
- Remaining issues.

Do not silently skip validation or documentation.

---

## 15. IMPORTANT DEADLINE PRIORITY

The final website must be ready before Saturday, 28 November 2026, 10:00 AM IST.

Prioritize:

1. Visual quality.
2. Working core functionality.
3. Responsive design.
4. Reliable navigation.
5. Error-free production build.
6. Complete README documentation.
7. Deployment readiness.

Avoid unnecessary features that threaten the deadline.

Do not spend excessive time on features outside the agreed MVP.

---

## 16. FINAL DEVELOPMENT PRINCIPLE

Every change must improve the project without unnecessarily damaging what already works.

Maintain the same quality standards across every page.

The final website should be polished, maintainable, responsive, functional and suitable for a professional startup client demonstration.

THESE RULES ARE MANDATORY FOR ALL FUTURE DEVELOPMENT TASKS IN THIS PROJECT.