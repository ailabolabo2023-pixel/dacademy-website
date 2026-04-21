@echo off
chcp 65001 > nul
echo Setting up Plan 6 background...

copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\seamless_pop_dots_bg_1776534053120.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\profile_bg_pop.png"

if %errorlevel% neq 0 (
    echo [ERROR] Failed to copy image.
) else (
    echo [SUCCESS] Background image placed successfully!
)
pause
