# Exclusive Furniture World (React preview)

Vite + React + TypeScript. Design system from the ui-ux-pro-max skill: Trust and Authority pattern, Lexend and Source Sans 3, navy and blue with amber for the main action, light and dark themes, keyboard and screen-reader friendly.

## Run
    npm install
    npm run dev        # development
    npm run build      # builds dist/index.html (single file, opens by double-click)

## Edit content
All text, numbers, ranges and contact details are in `src/data.ts`. Every value is a placeholder.

## Add real photos
Put JPG files in `public/images/` using these names. A missing file keeps the drawn placeholder.

    hero.jpg  about.jpg
    range-1.jpg ... range-6.jpg   (workstations, executive, seating, storage, conference, reception)
    p1.jpg p2.jpg p3.jpg          (project cards)

Then run `npm run build`. Landscape photos work best (hero 16:11, ranges 8:5, projects 4:3, about about 1:1).
