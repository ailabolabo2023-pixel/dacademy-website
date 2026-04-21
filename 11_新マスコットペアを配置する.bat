@echo off
chcp 65001 > nul
echo Placing new mascot pair images...

copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\media__1776539313378.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\mascot_left.png"
copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\media__1776539316479.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\mascot_right.png"

if %errorlevel% neq 0 (
    echo [ERROR] Failed to placement.
) else (
    echo [SUCCESS] New mascot pairs placed!
)
pause
