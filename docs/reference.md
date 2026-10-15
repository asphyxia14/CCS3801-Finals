# EXTRAS

### The Recommended 5-View Architecture

│ Diagram exceeds terminal width (212 > 108 cols)
│ Displayed as code block. Widen terminal to view inline.

    flowchart TD
        App[Beans & Buns Web App] --> Nav[Navbar]
        App --> Views[Views / Routes]
        App --> Foot[Footer]

        subgraph MultiSection ["3 Multi-Section Views"]
            Views --> HomeView["1. HomeView.vue (Multi-Section)"]
            Views --> MenuView["2. MenuView.vue (Multi-Section)"]
            Views --> AboutView["3. AboutView.vue (Multi-Section)"]
        end

        subgraph FocusedViews ["2 Focused Views"]
            Views --> ReviewsView["4. ReviewsView.vue (Focused / Functional)"]
            Views --> ContactView["5. ContactView.vue (Focused / Functional)"]
        end

──────

### 1. The 3 Multi-Section Views

These three pages serve as the rich, content-heavy pillars of your website:

#### 1. HomeView.vue (Landing & Discovery)

A single HeroSection makes the homepage feel empty. Expanding it gives users a taste of both the Beans
and the Buns:

• HeroSection.vue: Bold headline, hero image (e.g., Mexican beef bun paired with an iced brew), and
quick call-to-action buttons ("Explore Menu" & "Visit Us").
• FeaturedSpecialsSection.vue: Spotlights 3–4 signature favorites (e.g., Mexican Beef Bun, Affogato,
Signature Iced Coffee, Crispy Chicken Pops).
• AboutTeaserSection.vue: Short highlight introducing Beans & Buns’ vibe and story with a "Read Our
Story" button linking to About.
• StoreHoursLocationBanner.vue: Quick visual bar with opening hours, location address, and dining
options (Dine-in / Takeout / Wifi available).

#### 2. MenuView.vue (Catalog & Offerings)

Since the menu has two clear culinary sides, divide it logically into dedicated sections:

• MenuHeroSection.vue: Header with category filter pills/tabs (All, Specialty Buns, Coffee & Drinks,
Snacks & Sides, Desserts).
• BunsSection.vue: Specialty hotdog buns with various toppings (Mexican beef, cheese & onion, classic
chili, etc.).
• SidesSection.vue: Tacos, seasoned fries, and chicken pops.
• BeveragesSection.vue: Espresso-based drinks, cold brews, and refreshing fruit drinks.
• DessertsSection.vue: Affogato, sweet pastries, and ice-cream-topped buns.
• CombosSection.vue: Value pairings (e.g., "The Classic Duo: Hotdog Bun + Iced Coffee").

#### 3. AboutView.vue (Story & Identity)

Use the insights from your interview with the owner and staff here:

• AboutHeroSection.vue: Intro banner with a warm shot of the cafe interior.
• HistoryStorySection.vue: The origin story—how the concept of gourmet hotdog buns combined with
specialty coffee came to life.
• CraftIngredientsSection.vue: Highlights bean sourcing, freshly prepared toppings, and house-made
sauces.
• MeetTheTeamSection.vue: Profile cards of the owner, head barista, and kitchen crew (from your
interview!).
• VibeGallerySection.vue: Photo grid showing the cozy ambiance, customer seating, study friendly spots,
and pet-friendliness.
──────

### 2. The 2 Focused / Single-Purpose Views

These views do not need to be split into multiple massive sections. Instead, they serve a specific,
interactive functional purpose:

#### 4. ReviewsView.vue (Community & Feedback)

(Notice you already had ReviewsSection.vue in your draft—turning it into a dedicated view makes a lot of
sense!)

• Purpose: Displays customer testimonials and community ratings for their buns and drinks.
• Key Features:
• Overall rating summary (e.g., 4.8 ★ / 5 from local coffee lovers).
• List/grid of customer reviews with tags like "Best Affogato in town" or "Mexican Beef Bun is a
must-try".
• An interactive "Leave a Review" form (great for demonstrating Vue form handling and validation).

#### 5. ContactView.vue (Location & Inquiries)

(Separating this from About keeps both pages cleaner and gives you a standard 5th route)

• Purpose: A clear, dedicated stop for people who want to visit or reach out.
• Key Features:
• Embedded Google Map showing Beans & Buns' exact location.
• Operating hours and contact info (phone, email, social links).
• Quick inquiry / catering / table inquiry contact form.
