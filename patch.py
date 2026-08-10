with open("src/pages/MapView.js", "r") as f:
    content = f.read()

old_code = """    const debouncedRefreshCards = debounce(() => this.refreshCards(), 150);
    budgetSlider?.addEventListener('input', e => {
      this.params.budget = parseInt(e.target.value);
      budgetLabel.textContent = formatINR(this.params.budget);
      this.updateSliderGradient(budgetSlider);
      debouncedRefreshCards();   // re-render cards + markers with new budget threshold
    });"""

new_code = """    // ⚡ Bolt Optimization: Debounce map re-rendering on high-frequency slider inputs.
    // Impact: Prevents main-thread blocking by avoiding expensive Leaflet marker destruction/recreation on every frame of a drag.
    const debouncedRefreshCards = debounce(() => this.refreshCards(), 150);
    budgetSlider?.addEventListener('input', e => {
      this.params.budget = parseInt(e.target.value);
      budgetLabel.textContent = formatINR(this.params.budget);
      this.updateSliderGradient(budgetSlider);
      debouncedRefreshCards();   // re-render cards + markers with new budget threshold
    });"""

content = content.replace(old_code, new_code)

with open("src/pages/MapView.js", "w") as f:
    f.write(content)
