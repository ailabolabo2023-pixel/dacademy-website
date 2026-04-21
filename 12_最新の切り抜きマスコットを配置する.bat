@echo off
chcp 65001 > nul
echo Placing the latest cropped mascot images...

copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\media__1776540896771.png" "C:\Users\AIshi\.\.gemini\antigravity\scratch\dacademy-website\public\images\mascot_left_final.png"
copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\media__1776540880919.png" "C:\Users\AIshi\.\.gemini\antigravity\scratch\dacademy-website\public\images\mascot_right_final.png"

if %errorlevel% neq 0 (
    echo [ERROR] Failed to placement.
) else (
    echo [SUCCESS] Latest cropped mascots placed!
)
pause
