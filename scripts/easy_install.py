import subprocess
import os
import sys
from pathlib import Path
from shutil import rmtree


PARENT_DIR = Path(__file__).parent
INITIAL_RERUN = "--rerun" in sys.argv


def main_entry():
    if not INITIAL_RERUN:
        print()
        print("Greetings from Media-Wizard easy install script")
        print()
        print()
    if not INITIAL_RERUN and PARENT_DIR.name == "scripts" and PARENT_DIR.parent.joinpath("venv").exists():
        os.chdir(PARENT_DIR.parent)
        print("Existing installation detected.")
        print("Select the required action:")
        print("\tReinstall (1)")
        print("\tUpdate (2)")
        print("\tRun (3)")
        print("\tInstall All flows(can be done from UI)(4)")
        c = input("What should we do?: ")
        if c == "1":
            reinstall()
        elif c == "2":
            update_wizard()
        elif c == "3":
            run_wizard()
        elif c == "4":
            install_all_flows()
        else:
            print("exiting")
    elif INITIAL_RERUN:
        os.chdir(PARENT_DIR.parent)
        reinstall()
    else:
        q = "No existing installation found, start first installation? (Y/N)"
        if q.lower() == "y":
            first_run()
        else:
            print("exiting")


def first_run():
    clone_repository()
    os.remove(__file__)
    folder_name = "ai_media_wizard" if Path("ai_media_wizard").exists() else "AI_Media_Wizard"
    subprocess.run(
        [sys.executable, Path(f"{folder_name}/scripts/easy_install.py"), "--rerun"],
        check=False, stdin=sys.stdin, stdout=sys.stdout, stderr=sys.stderr)


def reinstall():
    if Path("venv").exists():
        c = input("venv folder already exists. Remove it? (Y/N): ").lower()
        if c == "y":
            rmtree("venv")
            print("Removed `venv` folder.")
    if not Path("venv").exists():
        create_venv()
    install_graphics_card_packages()
    print("Installing AI-Media-Wizard")
    venv_run('pip install ".[app]"')
    print("Preparing AI-Media-Wizard working instance..")
    venv_run("python -m ai_media_wizard install")
    c = input("Installation finished. Run MediaWizard? (Y/N): ").lower()
    if c == "y":
        run_wizard()
    else:
        print("You can run in manually later. From activated virtual environment execute:")
        print("python -m ai_media_wizard run --ui=client")


def run_wizard():
    venv_run("python -m ai_media_wizard run --ui=client")


def update_wizard():
    print("Updating source code from repository..")
    subprocess.check_call(["git", "pull"])
    print("Running `python -m ai_media_wizard update`")
    venv_run("python -m ai_media_wizard update")


def install_all_flows():
    flows = [
        "sdxl_lighting_8",
        "playground_2_5_aesthetic",
        "photomaker_1",
        "juggernaut_lighting_loras",
        "stable_cascade",
    ]

    for i in flows:
        param_template = f"install-flow --flow flows/{i}/flow.json --flow_comfy flows/{i}/flow_comfy.json"
        venv_run(f"python -m ai_media_wizard {param_template}")


def clone_repository() -> None:
    try:
        print("Cloning AI_Media_Wizard repository..")
        subprocess.check_call(["git", "clone", "https://github.com/cloud-media-flows/AI_Media_Wizard.git"])
        print("Repository cloned successfully.")
    except subprocess.CalledProcessError as e:
        print("An error occurred while trying to clone the repository:", str(e))
        raise
    except Exception as e:
        if e.__class__ == FileNotFoundError:
            print("git command could not be found. Please ensure Git is installed and added to your PATH.")
        else:
            print("An unexpected error occurred:", str(e))
        raise


def create_venv() -> None:
    try:
        subprocess.check_call([sys.executable, "-m", "venv", "venv"])
        print("Virtual environment created successfully.")
    except Exception as e:
        print("An error occurred while creating the virtual environment:", str(e))
        raise


def venv_run(command: str) -> None:
    if sys.platform.lower() == "win32":
        command = f"call venv/Scripts/activate.bat && {command}"
    else:
        command = f". venv/bin/activate && {command}"
    try:
        print(f"executing(pwf={os.getcwd()}): {command}")
        subprocess.check_call(command, shell=True)
    except subprocess.CalledProcessError as e:
        print("An error occurred while executing command in venv:", str(e))
        raise


def install_graphics_card_packages():
    if sys.platform.lower() == "darwin":
        return
    q = "Do you want to install packages for an AMD or NVIDIA graphics card? Enter AMD, NVIDIA, or skip(default): "
    c = input(q).lower()
    if c == "amd":
        print("Installing packages for AMD graphics card...")
        if sys.platform.lower() == "win32":
            venv_run("pip install -U torch-directml")
        else:
            venv_run(
                "pip install -U --pre torch torchvision --index-url https://download.pytorch.org/whl/nightly/rocm6.0"
            )
    elif c == "nvidia":
        print("Installing packages for NVIDIA graphics card...")
        venv_run("pip install -U torch torchvision --extra-index-url https://download.pytorch.org/whl/cu121")
    else:
        print("Skipping graphics card package installation.")


if __name__ == "__main__":
    main_entry()
