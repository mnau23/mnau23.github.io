document.querySelectorAll('.skill-per').forEach((skillPer) => {
    const percentageValue = Number.parseInt(
        skillPer.getAttribute('data-percentage') || skillPer.getAttribute('percentage') || '0',
        10,
    );
    const targetPercentage = Number.isNaN(percentageValue) ? 0 : percentageValue;
    const durationMs = 2000;
    const startTime = performance.now();

    skillPer.style.width = `${targetPercentage}%`;

    const animatePercentage = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const currentValue = Math.floor(progress * targetPercentage);

        skillPer.setAttribute('data-percentage', `${currentValue}%`);

        if (progress < 1) {
            requestAnimationFrame(animatePercentage);
        }
    };

    requestAnimationFrame(animatePercentage);
});
