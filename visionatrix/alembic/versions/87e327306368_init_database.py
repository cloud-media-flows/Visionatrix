"""Init database

Revision ID: 87e327306368
Revises:
Create Date: 2024-06-12 20:20:51.613173

"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "87e327306368"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "global_settings",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("name", sa.String(), nullable=True),
        sa.Column("value", sa.String(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("name"),
    )
    op.create_table(
        "tasks_queue", sa.Column("id", sa.Integer(), autoincrement=True, nullable=False), sa.PrimaryKeyConstraint("id")
    )
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("user_id", sa.String(), nullable=True),
        sa.Column("full_name", sa.String(), nullable=True),
        sa.Column("email", sa.String(), nullable=True),
        sa.Column("is_admin", sa.Boolean(), nullable=True),
        sa.Column("hashed_password", sa.String(), nullable=True),
        sa.Column("disabled", sa.Boolean(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("user_id"),
    )
    op.create_table(
        "workers",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("worker_id", sa.String(), nullable=True, comment="user_id:hostname:device_name:device_index"),
        sa.Column("worker_version", sa.String(), nullable=True),
        sa.Column("last_seen", sa.DateTime(), nullable=True),
        sa.Column("tasks_to_give", sa.JSON(), nullable=True),
        sa.Column("os", sa.String(), nullable=True),
        sa.Column("version", sa.String(), nullable=True),
        sa.Column("embedded_python", sa.Boolean(), nullable=True),
        sa.Column("device_name", sa.String(), nullable=True),
        sa.Column("device_type", sa.String(), nullable=True),
        sa.Column("vram_total", sa.BigInteger(), nullable=True),
        sa.Column("vram_free", sa.BigInteger(), nullable=True),
        sa.Column("torch_vram_total", sa.BigInteger(), nullable=True),
        sa.Column("torch_vram_free", sa.BigInteger(), nullable=True),
        sa.Column("ram_total", sa.BigInteger(), nullable=True),
        sa.Column("ram_free", sa.BigInteger(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("worker_id"),
    )
    op.create_index(op.f("ix_workers_last_seen"), "workers", ["last_seen"], unique=False)
    op.create_index(op.f("ix_workers_user_id"), "workers", ["user_id"], unique=False)
    op.create_table(
        "task_locks",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("task_id", sa.Integer(), nullable=False),
        sa.Column("locked_at", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(
            ["task_id"],
            ["tasks_queue.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("task_id"),
    )
    op.create_table(
        "tasks_details",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("task_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("worker_id", sa.String(), nullable=True),
        sa.Column("progress", sa.Float(), nullable=True),
        sa.Column("error", sa.String(), nullable=True),
        sa.Column("name", sa.String(), nullable=True),
        sa.Column("input_params", sa.JSON(), nullable=True),
        sa.Column("outputs", sa.JSON(), nullable=True),
        sa.Column("input_files", sa.JSON(), nullable=True),
        sa.Column("flow_comfy", sa.JSON(), nullable=True),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.Column("finished_at", sa.DateTime(), nullable=True),
        sa.Column("execution_time", sa.Float(), nullable=True),
        sa.ForeignKeyConstraint(
            ["task_id"],
            ["tasks_queue.id"],
        ),
        sa.ForeignKeyConstraint(
            ["worker_id"],
            ["workers.worker_id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("task_id"),
    )
    op.create_index(op.f("ix_tasks_details_progress"), "tasks_details", ["progress"], unique=False)
    op.create_index(op.f("ix_tasks_details_updated_at"), "tasks_details", ["updated_at"], unique=False)
    op.create_index(op.f("ix_tasks_details_user_id"), "tasks_details", ["user_id"], unique=False)
    op.create_index(op.f("ix_tasks_details_worker_id"), "tasks_details", ["worker_id"], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f("ix_tasks_details_worker_id"), table_name="tasks_details")
    op.drop_index(op.f("ix_tasks_details_user_id"), table_name="tasks_details")
    op.drop_index(op.f("ix_tasks_details_updated_at"), table_name="tasks_details")
    op.drop_index(op.f("ix_tasks_details_progress"), table_name="tasks_details")
    op.drop_table("tasks_details")
    op.drop_table("task_locks")
    op.drop_index(op.f("ix_workers_user_id"), table_name="workers")
    op.drop_index(op.f("ix_workers_last_seen"), table_name="workers")
    op.drop_table("workers")
    op.drop_table("users")
    op.drop_table("tasks_queue")
    op.drop_table("global_settings")
    # ### end Alembic commands ###
