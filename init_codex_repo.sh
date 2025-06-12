#!/usr/bin/env bash
set -e

REPO_URL="https://github.com/GinniNio/spt2.git"
CLONE_DIR="${1:-spt2-codex}"

echo "Cloning $REPO_URL into $CLONE_DIR…"
git clone "$REPO_URL" "$CLONE_DIR"
cd "$CLONE_DIR"

# 1. init git if needed (already cloned though)
# git init

# 2. create venv & install openai + dotenv
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install openai python-dotenv

# 3. write .gitignore
cat > .gitignore <<EOF
.venv/
__pycache__/
*.pyc
.env
EOF

# 4. add .env template
cat > .env.example <<EOF
OPENAI_API_KEY=your_key_here
EOF

# 5. add a Codex test script
cat > codex_test.py <<'EOF'
from dotenv import load_dotenv
import os, openai

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

resp = openai.Completion.create(
    model="code-davinci-002",
    prompt="# Python function that reverses a string\n",
    max_tokens=32, temperature=0
)
print(resp.choices[0].text)
EOF

# 6. commit & push to a new branch
git checkout -b codex-init
git add .env.example .gitignore codex_test.py
git commit -m "chore: bootstrap Codex support"
git push -u origin codex-init

echo "✅ Done!  Now create a PR from the `codex-init` branch."
