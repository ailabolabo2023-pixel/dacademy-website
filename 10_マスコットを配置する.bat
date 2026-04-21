@echo off
chcp 65001 > nul
echo Placing mascot image...

copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\media__1776537028953.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\mascot_master.png"

if %errorlevel% neq 0 (
    echo [ERROR] Failed to placement.
) else (
    echo [SUCCESS] Mascot image placed as mascot_master.png!
)
pause
