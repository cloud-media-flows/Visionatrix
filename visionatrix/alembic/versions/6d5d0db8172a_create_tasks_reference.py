"""create tasks reference

Revision ID: 6d5d0db8172a
Revises: e9ac216f8caa
Create Date: 2024-08-02 20:33:51.889695

"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "6d5d0db8172a"
down_revision: str | None = "e9ac216f8caa"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("tasks_details", schema=None) as batch_op:
        batch_op.add_column(sa.Column("parent_task_id", sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column("parent_task_node_id", sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column("children_ids", sa.JSON(), nullable=True))
        batch_op.create_index("ix_parent_task", ["parent_task_id", "parent_task_node_id"], unique=False)
        batch_op.create_index(batch_op.f("ix_tasks_details_parent_task_id"), ["parent_task_id"], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("tasks_details", schema=None) as batch_op:
        batch_op.drop_index(batch_op.f("ix_tasks_details_parent_task_id"))
        batch_op.drop_index("ix_parent_task")
        batch_op.drop_column("children_ids")
        batch_op.drop_column("parent_task_node_id")
        batch_op.drop_column("parent_task_id")
    # ### end Alembic commands ###
