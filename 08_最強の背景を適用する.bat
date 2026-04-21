@echo off
echo 背景画像（2枚）を配置しています...

:: 1. 集中線の画像
copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\strong_comic_burst_bg_1776533091083.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\profile_bg_v2.png"

:: 2. シームレスドットの画像
copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\seamless_comic_halftone_pattern_1776533502444.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\profile_bg_seamless.png"

if %errorlevel% neq 0 (
    echo [ERROR] 配置に失敗しました。
) else (
    echo [SUCCESS] 2枚の画像の配置が完了しました！
)
pause
